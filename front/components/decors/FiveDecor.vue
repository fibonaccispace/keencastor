<template lang="pug">
  canvas(ref="canvas" :width="this.width", :height="this.height")
</template>

<script>
import { useMainStore } from '@/store/main.js'
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min
const sdSegment = (p, a, b) => {
  const pa = { x: p.x - a.x, y: p.y - a.y }
  const ba = { x: b.x - a.x, y: b.y - a.y }
  const dotPaBa = pa.x * ba.x + pa.y * ba.y
  const dotBaBa = ba.x * ba.x + ba.y * ba.y
  const h = Math.max(0, Math.min(1, dotPaBa / dotBaBa))
  const projection = { x: ba.x * h, y: ba.y * h }
  const length = Math.sqrt(Math.pow(pa.x - projection.x, 2) + Math.pow(pa.y - projection.y, 2) * 7)
  return length
}
class Vector2 {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}
export default {
  data() {
    return {
      isFirstFrame: true,
      store: true,
      width: 180,
      height: 180,
      canvas: null,
      context: null,
    }
  },
  mounted() {
    this.store = useMainStore()
    const dpr = window.devicePixelRatio || 1
    this.$refs.canvas.width = this.width * dpr
    this.$refs.canvas.height = this.height * dpr
    this.$refs.canvas.style.width = this.width + 'px'
    this.$refs.canvas.style.height = this.height + 'px'
    this.canvas = this.$refs.canvas
    this.context = this.$refs.canvas.getContext('2d')
    this.context.scale(dpr, dpr)

    this.image = [
      new Vector2(30, 6),
      new Vector2(17, 6),
      new Vector2(17, 20),
      new Vector2(29, 20),
      new Vector2(33, 24),
      new Vector2(33, 40),
      new Vector2(29, 44),
      new Vector2(19, 44),
      new Vector2(16, 41),
      new Vector2(16, 34),
    ]
    this.pixel = 6
    this.pwidth = Math.floor(this.canvas.width / this.pixel)
    this.pheight = Math.floor(this.canvas.height / this.pixel)
    this.colors = ['red', 'blue', 'green', 'yellow', 'pink']
    this.time = 0

    requestAnimationFrame(this.animate)
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate)
      if (!this.isFirstFrame && !this.store.scripts) {
        return
      }
      this.isFirstFrame = false
      this.context.clearRect(0, 0, this.width, this.height)

      for (let x = 0; x < this.pwidth; x++) {
        for (let y = 0; y < this.pheight; y++) {
          let minDistance = 1000
          for (let k = 0; k < this.image.length - 1; k++) {
            const pVector = new Vector2(x, y)
            const aVector = new Vector2(this.image[k].x/1.5-2, this.image[k].y/1.5-2)
            const bVector = new Vector2(this.image[k+1].x/1.5-2, this.image[k+1].y/1.5-2)
            const distance = sdSegment(pVector, aVector, bVector)
            if (distance < minDistance)
              minDistance = distance
          }
          const sinValue = (Math.sin(this.time + y / 20) + 1) / 3 + .2
          const color = Math.abs(minDistance * (20 / sinValue))
          let radiusValue = 1

          if (color > 235)
            continue
          else if (color < 130)
            this.context.fillStyle = `#000`
          else {
            const max = 235
            const min = 130
            const diff = max - min
            const value = color - min
            const binary = value / diff
            radiusValue = 1 - binary
            this.context.fillStyle = this.colors[random(0, this.colors.length)]
          }

          this.context.beginPath()
          const nx = x * this.pixel + this.pixel / 2
          const ny = y * this.pixel + this.pixel / 2
          const nr = (this.pixel / 2) * radiusValue
          this.context.arc(nx, ny, nr, 0, 2 * Math.PI)
          this.context.fill()
          this.context.closePath()
        }
      }

      this.time += 0.03
    }
  }
}
</script>

<style lang="sass" scoped>
canvas
  flex-shrink: 0
</style>
