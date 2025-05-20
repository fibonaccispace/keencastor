<template lang="pug">
  canvas(ref="canvas" :width="this.width", :height="this.height")
</template>

<script>
import { useMainStore } from '@/store/main.js'

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min
const radian = (degrees) => (-degrees - 180) * Math.PI / 180
const uniform = (min = 0, max = 1) => Math.random() * (max - min) + min

class Point {
  constructor(width, height, pixel) {
    this.width = width
    this.height = height
    this.pixel = pixel

    this.colorPoint = `rgb(${random(0, 256)}, ${random(0, 256)}, ${random(0, 256)})`
    this.colorLine = `rgb(${random(0, 256)}, ${random(0, 256)}, ${random(0, 256)})`
    this.colorRight = `rgb(${random(0, 256)}, ${random(0, 256)}, ${random(0, 256)})`

    this.radius = (width / pixel) / 2
    this.theta = uniform(0, Math.PI * 2)
    this.phi = uniform(Math.PI / 10, Math.PI - Math.PI / 10)
    this.update()
  }

  update() {
    this.theta += 0.02
    this.x = this.radius * Math.sin(this.phi) * Math.cos(this.theta)
    this.y = this.radius * Math.sin(this.phi) * Math.sin(this.theta)
    this.z = this.radius * Math.cos(this.phi)
  }

  set(context) {
    context.fillStyle = this.colorPoint
    const x = Math.floor(this.x) * this.pixel + this.width / 2
    const y = Math.floor(this.z) * this.pixel + this.height / 2
    const s = this.pixel * 2
    context.fillRect(x, y, s, s)
  }
}

export default {
  data() {
    return {
      isFirstFrame: true,
      store: true,
      width: 180,
      height: 180,
      pixel: 4,
      context: null,
      clickHandler: null,
    }
  },
  mounted() {
    this.store = useMainStore()
    const dpr = window.devicePixelRatio || 1
    this.$refs.canvas.width = this.width * dpr
    this.$refs.canvas.height = this.height * dpr
    this.$refs.canvas.style.width = this.width + 'px'
    this.$refs.canvas.style.height = this.height + 'px'
    this.context = this.$refs.canvas.getContext('2d')
    this.context.scale(dpr, dpr)

    this.points = []
    for (let i = 0; i < random(6,20); i++)
      this.points.push(new Point(this.width, this.height, this.pixel))

    this.clickHandler = ()=>{
      if(!this.store.scripts) return
      this.points.length = 0
      for (let i = 0; i < random(6,20); i++)
        this.points.push(new Point(this.width, this.height, this.pixel))
    }
    this.$refs.canvas.addEventListener('click', this.clickHandler)
    requestAnimationFrame(this.animate)
  },
  beforeUnmount(){
    this.$refs.canvas.removeEventListener('click', this.clickHandler)
  },
  methods: {
    random(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    animate() {
      requestAnimationFrame(this.animate)
      if(!this.isFirstFrame && !this.store.scripts){
        return
      }
      this.isFirstFrame = false
      this.context.clearRect(0, 0, this.width, this.height)

      this.points.forEach((point, index, array) => {
        let nextPoint = index + 1 >= array.length ? array[0] : array[index + 1]
        let npoints = this.getPointsBresenham(Math.floor(point.x), Math.floor(point.z), Math.floor(nextPoint.x), Math.floor(nextPoint.z))
        
        npoints.forEach((item, index) => {
          if (index % 2 == 0) return
          this.context.fillStyle = point.colorLine
          this.context.fillRect(this.width / 2 + item.x * this.pixel, this.height / 2 + item.y * this.pixel, this.pixel, this.pixel)
        })

        if (index % 3 == 0) {
          let nextPoint2 = index + 2 >= array.length ? array[0] : array[index + 2]
          npoints = this.getPointsBresenham(Math.floor(point.x), Math.floor(point.z), Math.floor(point.x), Math.floor(nextPoint.z))
          npoints.forEach((item, index) => {
            if (index % 5 == 0) return
            this.context.fillStyle = point.colorRight
            this.context.fillRect(this.width / 2 + item.x * this.pixel, this.height / 2 + item.y * this.pixel, this.pixel, this.pixel)
          })
          npoints = this.getPointsBresenham(Math.floor(point.x), Math.floor(nextPoint.z), Math.floor(nextPoint.x), Math.floor(nextPoint.z))
          npoints.forEach((item, index) => {
            if (index % 5 == 0) return
            this.context.fillStyle = point.colorRight
            this.context.fillRect(this.width / 2 + item.x * this.pixel, this.height / 2 + item.y * this.pixel, this.pixel, this.pixel)
          })
        }

        point.set(this.context)
        point.update()
      })
    },
    getPointsBresenham(x1, y1, x2, y2) {
      const points = []
      let dx = Math.abs(x2 - x1)
      let dy = Math.abs(y2 - y1)
      let sx = x1 < x2 ? 1 : -1
      let sy = y1 < y2 ? 1 : -1
      let err = dx - dy
      while (true) {
        points.push({ x: x1, y: y1 })
        if (x1 === x2 && y1 === y2) break
        let e2 = 2 * err
        if (e2 > -dy) {
          err -= dy
          x1 += sx
        }
        if (e2 < dx) {
          err += dx
          y1 += sy
        }
      }
      return points
    }
  }
}
</script>

<style lang="sass" scoped>
canvas
  flex-shrink: 0
</style>
