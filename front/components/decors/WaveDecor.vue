<template lang="pug">
  canvas(ref="canvas" :width="this.width", :height="this.height")
</template>

<script>
import { useMainStore } from '@/store/main.js'
class Item {
  constructor(x, y, type) {
    this.x = x
    this.y = y
    this.type = type
  }
}
class Weight {
  constructor(value, time, speed) {
    this.value = Math.random() * 2 - 1
    this.time = Math.random() * 100
    this.speed = Math.random() / 50
  }
}
export default {
  data() {
    return {
      isFirstFrame: true,
      store: true,
      width: 180,
      height: 180,
      context: null,
      pixel: 15,
      inputs: [0, 0],
      weights: this.array1D(16, true),
    }
  },
  mounted() {
    this.store = useMainStore()
    const dpr = window.devicePixelRatio || 1
    this.$refs.canvas.width = this.width * dpr
    this.$refs.canvas.height = this.height * dpr
    this.$refs.canvas.style.width = this.width+'px'
    this.$refs.canvas.style.height = this.height+'px'
    this.context = this.$refs.canvas.getContext('2d')
    this.context.scale(dpr, dpr)
    requestAnimationFrame(this.animate)
  },
  methods: {
    log(x) {
      return 1 / (1 + Math.exp(-x))
    },
    dlog(x) {
      return log(x) * (1 - log(x))
    },
    array1D(width, random = false) {
      const temp = []
      for (let i = 0; i < width; i++)
        temp[i] = random ? new Weight() : 0
      return temp
    },
    enterInputs(x, y) {
      this.inputs[0] = x
      this.inputs[1] = y
      this.inputs[2] = x ** 2
      this.inputs[3] = y ** 2
      this.inputs[4] = x ** 3
      this.inputs[5] = y ** 3
      this.inputs[6] = x * y
      this.inputs[7] = x ** 2 * y
      this.inputs[8] = x ** 3 * y
      this.inputs[9] = x * y ** 2
      this.inputs[10] = x * y ** 3
      this.inputs[11] = x ** 2 * y ** 2
      this.inputs[12] = x ** 3 * y ** 2
      this.inputs[13] = x ** 2 * y ** 3
      this.inputs[14] = x + y
      this.inputs[15] = 1
    },
    feed(x, y) {
      this.enterInputs(x, y)
      let sum = 0
      for (let i = 0; i < this.inputs.length; i++) {
        sum += this.inputs[i] * this.weights[i].value
      }
      return this.log(sum * 7)
    },
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
      const width = this.width / this.pixel
      const height = this.height / this.pixel
      for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
          const nx = (i / width) * 2 - 1
          const ny = (j / height) * 2 - 1
          const out = this.feed(nx, ny)
          // const color = out*255
          const x = i * this.pixel + this.pixel * (out) / 2
          const y = j * this.pixel
          const w = this.pixel - this.pixel * (out)
          const h = this.pixel
          this.context.fillStyle = `#EC5B2D`
          this.context.fillRect(x, y, w, h)
        }
      }
      for (let i = 0; i < this.weights.length; i++) {
        this.weights[i].value = Math.sin(this.weights[i].time)
        this.weights[i].time += this.weights[i].speed
      }
    }
  }
}
</script>

<style lang="sass" scoped>
canvas
  flex-shrink: 0
</style>
