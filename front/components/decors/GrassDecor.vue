<template lang="pug">
  .field(ref="field")
</template>

<style lang="sass">
.field
  position: relative
  width: 200px
  height: 200px
  background: linear-gradient(#fff 60%, #35fe02)
  .grass
    pointer-events: none
    position: absolute
    left: 0%
    bottom: 0
    transform-origin: 0 100%
    width: 2px
    background: green
  .petal
    width: 10px
    height: 10px
    background: red
    position: absolute
    transform: translate(-50%) rotate(-45deg)
</style>

<script>
import { useMainStore } from '@/store/main.js'
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min
export default{
  data(){
    return{
      store: null,
      isFirstFrame: true,
      field: null,
      lastX: 0,
      currentX: 0,
      diffX: 0,
      targetX: 0,
      actualShiftX: 0,
      list: []
    }
  },
  mounted(){
    this.store = useMainStore()
    this.field = this.$refs.field
    if(this.field){
      for(let i = 0; i < 30; i++){
        const g = this.createGrass()
        this.list.push(g)
        this.field.append(g)
      }
      requestAnimationFrame(this.animate)
    }
    this.field.addEventListener('mousemove', (e)=>{
      if(!this.store.scripts) return
      this.currentX = e.offsetX
      this.diffX = this.currentX - this.lastX
      this.lastX = this.currentX
      this.targetX = Math.min(Math.max(-50,this.diffX),50)
    })
  },
  methods:{
    animate(){
      requestAnimationFrame(this.animate)
      if(!this.isFirstFrame && !this.store.scripts){
        return
      }
      this.isFirstFrame = false
      const wind = this.actualShiftX
      this.actualShiftX += (this.targetX-this.actualShiftX)/15
      this.targetX -= this.targetX/10
      for(let g of this.list){
        const v = (g.max-g.min)*Math.sin(g.time)
        const r = g.min + v
        g.style.transform = `rotate(${r+wind}deg)`
        g.time+=.01
      }
    },
    createGrass(){
      const posX = random(0, 100)
      const grass = document.createElement('div')
      grass.classList.add('grass')
      grass.style.left = posX + '%'
      grass.style.bottom = random(-5, 6) + 'px'
      grass.style.height = random(20, 90) + '%'
      grass.style.background = `rgb(${random(20,60)},${random(150,190)},${random(20,60)})`
      grass.min = random(-12, -4)
      grass.max = random(5, 13)
      grass.time = random(0, 100)

      const color = `rgb(${random(200,255)},${random(20,100)},${random(20,100)})`
      for(let i = 0; i < random(3,10); i++){
        const petal = document.createElement('div')
        petal.classList.add('petal')
        grass.append(petal)
        petal.style.left = random(0,100)>50?'-4px':'6px'
        petal.style.top = random(0,8)*10 + '%'
        petal.style.background = color
      }
      return grass
    }
  }
}
</script>