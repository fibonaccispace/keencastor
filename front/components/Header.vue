<template lang="pug">
.header
  .logotype keencastor
  .description 
    .block-title {{$t('header.kind')}}
    a(
      href="https://keencastor.ru/v1" 
      target="blank" 
      v-html="$t('header.v1linktext')"
    ).link
    p(v-html="$t('header.description')")
  input(
    placeholder="tap here your ideas"
    ref="input"
  ).input
  .settings
    .block-title {{$t('header.settings')}}
    .options
      .option(@click="toggleLanguage") {{$t('header.lang')}}
      .option {{$t('header.theme')}}
      .option(@click="toggleScripts" ref="scripts").active {{$t('header.scrpits')}}
</template>

<script>
import { useMainStore } from '@/store/main.js'
export default{
  data() {
    return {
      chooseIndex: 0,
      chooseItems: this.$t('header.placeholders').split('/'),
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
    toggleLanguage(){
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'ru' : 'en'
    },
    toggleScripts(){
      const store = useMainStore()
      store.scripts = store.scripts ? false : true
      if(store.scripts){
        this.$refs.scripts.classList.add('active')
      }else{
        this.$refs.scripts.classList.remove('active')
      }
    },
    placeholder(){
      const choosed = this.chooseItems[(this.chooseIndex++)%this.chooseItems.length]
      if(this.$refs.input){
        this.$refs.input.placeholder = `${this.$t('header.placeholder')}: ${choosed}`
      }
    },
    scroll(){
      const height = window.scrollY
      if(height > 300){
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
  margin: 0 auto 1rem auto
  width: fit-content
  text-align: center
  font-size: var(--fsize-logo)
  font-family: 'Coolvetica', Arial, sans-serif
  cursor: pointer
  transition: .3s
  &:hover
    color: blue
  
.description, .input
  margin-bottom: 1.5rem

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
    background: black
    color: white
  .option.active:hover
    background: rgba(0,0,0,.7)
  .option
    user-select: none
    padding: .5rem .8rem
    background: rgba(0, 0, 0, .05)
    border-radius: 1rem
    cursor: pointer
    transition: .6s
  .option:hover
    background: rgba(0, 0, 0, 0.1)
    transition: .1s
  .option:active
    transform: scale(0.95)

.input
  border: none
  outline: none
  width: 100%
  border: 1px solid rgba(0, 0, 0, 0.1)
  padding: .5rem .7rem
  border-radius: 1rem
  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.05)
  transition: .3s
  &:focus
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.08)
</style>
