<template lang="pug">
  canvas(ref="canvas" :width="this.width", :height="this.height")
</template>

<script>
import { useMainStore } from '@/store/main.js'
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min
const log = (x) => 1/(1+Math.exp(-x))

export default {
  data() {
    return {
      isFirstFrame: true,
      store: true,
      width: 180,
      height: 180,
      canvas: null,
      context: null,
      wave: 10,
    }
  },
  mounted() {
    this.store = useMainStore()
    this.dpr = window.devicePixelRatio || 1
    this.$refs.canvas.width = this.width * this.dpr
    this.$refs.canvas.height = this.height * this.dpr
    this.$refs.canvas.style.width = this.width + 'px'
    this.$refs.canvas.style.height = this.height + 'px'
    this.canvas = this.$refs.canvas
    this.context = this.$refs.canvas.getContext('2d')
    this.context.scale(this.dpr, this.dpr)

    this.pixel = 5
    this.pwidth = Math.floor(this.canvas.width / this.pixel)
    this.pheight = Math.floor(this.canvas.height / this.pixel)
    this.time = 0

    this.waves = []
    for(let i = 0; i < this.wave; i++){
      this.waves.push({
        timeFactor: random(1,100)/5,
        size: random(-10,10),
        angle: random(-100,100)/100,
      })
    }

    this.canvas.addEventListener('click', this.reorder)

    requestAnimationFrame(this.animate)
  },
  beforeUnmount(){
    this.canvas.removeEventListener('click', this.reorder)
  },
  methods: {
    reorder() {
      for(let i = 0; i < this.waves.length; i++){
        this.waves[i] = {
          timeFactor: random(1,100)/5,
          size: random(-30,30),
          angle: random(-100,100)/100,
        }
      }
    },
    animate() {
      requestAnimationFrame(this.animate)
      if (!this.isFirstFrame && !this.store.scripts) {
        return
      }
      this.isFirstFrame = false
      this.context.clearRect(0, 0, this.width, this.height)

      for (let i = 0; i < this.pwidth; i++) {
        for (let j = 0; j < this.pheight; j++) {
          let color = 0

          this.waves.forEach((w)=>{
            if(w.size === 0) return
            color += Math.sin((i+(j*w.angle) + this.time * w.timeFactor)/w.size)
            color += random(0,100)/2000
          })

          if(color < 0) color = -color
          color = log(color)
          color *= 255

          this.context.fillStyle = `rgb(${color*0.9},${color},${color*1.3})`
          this.context.fillRect(
            i*this.pixel + this.canvas.width/(this.dpr*2) - this.pwidth*this.pixel/2,
            j*this.pixel + this.canvas.height/(this.dpr*2) - this.pheight*this.pixel/2,
            this.pixel,
            this.pixel
          )
        }
      }

      this.time += 0.1
    }
  }
}
</script>

<style lang="sass" scoped>
canvas
  flex-shrink: 0
</style>
