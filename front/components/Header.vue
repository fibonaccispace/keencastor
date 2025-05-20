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
  //- .input-wrapper
    .placeholder(ref="placeholder") {{$t('header.placeholder')}}:
      .placeholder-inner
        .placeholder-variants
          span {{$t('header.placeholders').split('/')[0]}}
          span {{$t('header.placeholders').split('/')[1]}}
          span {{$t('header.placeholders').split('/')[2]}}
          span {{$t('header.placeholders').split('/')[3]}}
          span {{$t('header.placeholders').split('/')[4]}}
          span {{$t('header.placeholders').split('/')[0]}}
    input(      
      ref="input"
      @input="change"
    ).input
  .filters
    .block-title {{$t('header.filter')}}
    .options
      .option
        img(src="/images/filters/all-mini.png")
        span Все
      .option 
        img(src="/images/filters/flappy-mini.png")
        span Проекты
      .option
        img(src="/images/filters/flower-mini.png")
        span Декорации
      .option
        img(src="/images/filters/art-mini.png")
        span Арты
      //- .option Матеши
      //- .option Нейронки
      //- .option Дрюки
      //- .option Генерации
      //- .option Игры
        
  .settings
    .block-title {{$t('header.settings')}}
    .options
      .option(@click="toggleLanguage") {{$t('header.lang')}}
      //- .option {{$t('header.theme')}}
      .option(@click="toggleScripts" ref="scripts").active {{$t('header.scrpits')}}
</template>

<script>
import { useMainStore } from '@/store/main.js'
export default{
  data() {
    return {
    }
  },
  mounted(){
    window.addEventListener('scroll', this.scroll)
  },
  beforeUnmount(){
    window.removeEventListener('scroll', this.scroll)
  },
  methods:{
    toggleLanguage(){
      this.$emit('toggleLanguage')
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'ru' : 'en'
      localStorage['lang'] = this.$i18n.locale
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
    change(){
      const input = this.$refs.input
      const placeholder = this.$refs.placeholder
      if(input.value && placeholder){
        placeholder.style.display = 'none'
      }else{
        placeholder.style.display = 'block'
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
.input-wrapper
  position: relative
  &:has(input:focus) .placeholder
    opacity: .3
  .input
    border: none
    outline: none
    width: 100%
    border: 1px solid rgba(0, 0, 0, 0.1)
    padding: .7rem 1rem
    border-radius: 1.2rem
    box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.05)
    transition: .3s
    font-size: 1rem
    &:focus
      box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.08)
  .placeholder
    opacity: .6
    transition: .3s
    pointer-events: none
    user-select: none
    position: absolute
    top: 49%
    left: 1.1rem
    transform: translate(0,-50%)
    .placeholder-inner
      overflow: hidden
      right: -4px
      top: 0
      transform: translate(100%,0)
      height: 100%
      position: absolute
    .placeholder-variants
      position: relative
      left: 0
      top: 0
      display: flex
      flex-direction: column
      gap: 5px
      animation: shifting 20s infinite

@keyframes shifting
  0%
    transform: translateY(0.1%)
  19%
    transform: translateY(0.1%)

  20%
    transform: translateY(-17%)
  39%
    transform: translateY(-17%)

  40%
    transform: translateY(-34.5%)
  59%
    transform: translateY(-34.5%)

  60%
    transform: translateY(-51.7%)
  79%
    transform: translateY(-51.7%)

  80%
    transform: translateY(-69%)
  99%
    transform: translateY(-69%)

  100%
    transform: translateY(-86%)
</style>

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
  
.description, 
.input-wrapper,
.filters
  margin-bottom: 1.5rem

.description p
  display: inline

.statistic
  height: 3rem
  background: #eee
  display: flex
  justify-content: center
  align-items: center
  color: #aaa
  margin-bottom: 1rem

.settings .block-title,
.filters .block-title
  margin-bottom: .5rem
.description .block-title
  margin-bottom: .3rem

.block-title
  pointer-events: none
  user-select: none
  opacity: .3
  transition: .3s

.options
  display: flex
  flex-wrap: wrap
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
    border-radius: 1.2rem
    cursor: pointer
    transition: .6s
    display: flex
    justify-content: center
    line-height: 150%
    img
      height: 20px
      margin-right: .2rem
  .option:hover
    background: rgba(0, 0, 0, 0.1)
    transition: .1s
  .option:active
    transform: scale(0.95)
</style>
