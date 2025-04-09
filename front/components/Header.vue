<template lang="pug">
.header
  .logotype 
    span keencastor
  p.description 
    a(href="https://keencastor.ru/v1/" target="blank").link first version of the site
    | , a&nbsp;site about coding adventures, interesting tasks, 
    | quotes from books, pet projects, images, visualizations, 
    | generatives, web-games, interactive elements, mathematical 
    | funs, facts about numbers, photos, installations, art objects.
  //- .statistic statistic graph
  input(
    placeholder="tap here your ideas"
    @focus="focus"
    @blur="blur"
  ).input
  .choose
    .choose-item drawing machine
    .choose-item birth generator
    .choose-item kaleidoscope
    .choose-item more arts
    .choose-item interesting tasks
    .choose-item photos
    .choose-item web-games
    .choose-item more decors
    .choose-item facts about numbers

</template>

<script>
export default{
  data() {
    return {
      chooseItems:[],
      look: false,
    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.chooseItems = document.querySelectorAll('.choose-item')
    })
  },
  methods:{
    focus(){
      this.look = true
      this.chooseItems.forEach((item, index)=>{
        setTimeout(()=>{
          if(this.look){
            item.style.opacity = 1
          }
        }, index*30)
      })
    },
    blur(){
      this.look = false
      this.chooseItems.forEach((item)=>{
        item.style.opacity = 0
      })
    }
  }
}
</script>

<style lang="sass">
@media(min-width: 1025px)
  .header:has(.input:focus) + .gallery
    opacity: .7
    transform: rotateX(4deg) scale(.9)
    pointer-events: none
    user-select: none
  .header:has(.input:focus) .choose
    opacity: 1
</style>

<style scoped lang="sass">
.header
  position: relative
  margin: 0 auto
  width: 50%
  @media(max-width: 1440px)
    width: 60%
  @media(max-width: 1024px)
    width: 70%
  @media(max-width: 768px)
    width: 100%

.logotype
  margin-bottom: 1rem
  text-align: center
  font-size: var(--fsize-logo)
  font-family: 'Coolvetica', Arial, sans-serif
  span
    cursor: pointer
    transition: .3s
    &:hover
      color: blue
  
.description
  margin-bottom: 1rem

.statistic
  height: 3rem
  background: #eee
  display: flex
  justify-content: center
  align-items: center
  color: #aaa
  margin-bottom: 1rem

.input
  // border: 1px solid rgba(0, 0, 0, 0.1)
  border: none
  outline: none
  width: 100%
  // padding: .5rem .7rem
  padding: .5rem 0
  body:has(&:focus)
    opacity: 0 !important

.choose
  padding-top: 1rem
  position: absolute
  width: 100%
  display: flex
  flex-wrap: wrap
  gap: .3rem
  .choose-item
    transition: opacity .5s
    opacity: 0
    padding: 8px 12px
    border-radius: 100px
    background: rgba(0, 0, 0, 0.05)
</style>
