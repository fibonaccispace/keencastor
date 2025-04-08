<template lang="pug">
    canvas(ref="canvas" :width="this.width", :height="this.height")
</template>

<script>
const random = (min, max) => Math.floor(Math.random()*(max-min))+min
const radian = (degrees) => (-degrees-180)*Math.PI/180
export default {
  data() {
    return {
      width: 180,
      height: 180,
      context: null,
      pixel: 10
    }
  },
  mounted() {
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
    animate() {
      // requestAnimationFrame(this.animate)
      this.context.clearRect(0, 0, this.width, this.height)
      const w = this.width/this.pixel
      const h = this.height/this.pixel
      for(let i = 0; i < w; i++){
        for(let j = 0; j < h; j++){
          this.context.fillStyle = `rgb(${this.random(0,256)},${this.random(0,256)},${this.random(0,256)})`
          this.context.fillRect(i*this.pixel,j*this.pixel,this.pixel,this.pixel)
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
canvas
    flex-shrink: 0
</style>
