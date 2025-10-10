<template lang="pug">
  canvas(ref="canvas" :width="this.width", :height="this.height")
</template>

<script>
import { useMainStore } from '@/store/main.js'
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min
const radian = (degrees) => (-degrees - 180) * Math.PI / 180

export default {
  data() {
    return {
      // ОБЯЗАТЕЛЬНЫЕ
      isFirstFrame: true,
      store: true,
      width: 180,
      height: 180,
      context: null,
      // ДОПОЛНИТЕЛЬНЫЕ
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
    requestAnimationFrame(this.animate)
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate)
      if(!this.isFirstFrame && !this.store.scripts) return
      this.isFirstFrame = false
      this.context.clearRect(0, 0, this.width, this.height)

      // ДЕЙСТВИЯ
    },
  }
}
</script>

<style lang="sass" scoped>
canvas
  flex-shrink: 0
</style>
