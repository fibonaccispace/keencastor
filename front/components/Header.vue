<template lang="pug">
.header
  .logotype 
    span keencastor
  p.description 
    a(href="https://keencastor.ru/v1/" target="blank").link old version of the site
    | , the&nbsp;site about coding adventures, interesting tasks, 
    | quotes from books, pet projects, images, visualizations, 
    | generatives, web-games, interactive elements, mathematical 
    | funs, facts about numbers, photos, installations, art objects.
  //- .statistic statistic graph
  input(
    placeholder="tap here your ideas"
    ref="input"
  ).input
</template>

<script>
export default{
  data() {
    return {
      chooseIndex: 0,
      chooseItems:[
        'drawing machine',
        'birth generator',
        'kaleidoscope',
        'more arts',
        'interesting tasks',
        'photos',
        'web-games',
        'more decors',
        'facts about numbers',
      ],
    }
  },
  mounted(){
    window.addEventListener('scroll', this.scroll)
    this.placeholder()
    setInterval(()=>{
      this.placeholder()
    },5000)
  },
  beforeUnmount(){
    window.removeEventListener('scroll', this.scroll)
  },
  methods:{
    placeholder(){
      const choosed = this.chooseItems[(this.chooseIndex++)%this.chooseItems.length]
      this.$refs.input.placeholder = `tap here your ideas: ${choosed}`
    },
    scroll(){
      const height = window.scrollY
      if(height > 220){
        this.$refs.input.blur()
      }
    },
  }
}
</script>

<style lang="sass">
@media(min-width: 1025px)
  .header:has(.input:focus) + .gallery
    opacity: .7
    transform: rotateX(3deg) scale(.9) translateY(-100px)
    pointer-events: none
    user-select: none
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
  border: none
  outline: none
  width: 100%
  padding: .5rem 0
</style>
