<template lang="pug">
.header
  .logotype 
    span keencastor
  .description 
    .block-title what's kind
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
  .settings
    .block-title settings
    .options
      .option en
      .option(@click="toggleTheme").active
        span#theme light 
        span#command cmd+b
      .option(@click="toggleScripts").active scripts
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
    const command = document.getElementById('command')
    if(command){
      command.innerText = navigator.userAgent.includes('Macintosh') ? 'cmd+b' : 'ctrl+b'
    }

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
      if(height > 300){
        this.$refs.input.blur()
      }
    },
    toggleTheme(){
      this.$emit('toggleTheme')
    }
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
  
.description, .input
  margin-bottom: 1.5rem

#command
  opacity: 0.5
  @media(max-width: 1024px)
    display: none

.statistic
  height: 3rem
  background: #eee
  display: flex
  justify-content: center
  align-items: center
  color: #aaa
  margin-bottom: 1rem

.block-title
  margin-bottom: .3rem
  pointer-events: none
  user-select: none
  opacity: 0.5

.options
  display: flex
  gap: .5rem
  .option.active
    background: var(--black-color)
    color: var(--white-color)
  .option.active:hover
    background: var(--black-color-transparent-75)
  .option
    user-select: none
    padding: .5rem .8rem
    background: var(--black-color-transparent-05)
    border-radius: 1rem
    cursor: pointer
    transition: .6s
  .option:hover
    background: var(--black-color-transparent-1)
    transition: .1s
  .option:active
    transform: scale(0.95)

.input
  border: none
  outline: none
  width: 100%
  background: var(--white-color)
  border: 1px solid var(--black-color-transparent-1)
  padding: .5rem .8rem
  border-radius: 1rem
  box-shadow: 0 3px 15px 0 var(--black-color-transparent-05)
  transition: box-shadow .3s
  font-size: 1rem
  &:focus
    box-shadow: 0 5px 30px 0 var(--black-color-transparent-05)
</style>
