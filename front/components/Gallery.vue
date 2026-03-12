<template lang="pug">
.works-wrapper(v-if="$i18n.locale == 'ru'")
  //- h1.title {{ $t('header.mywork') }}
  .works
    a.item(v-for="work in works" :href="work.url" target="_blank")
      .job(v-html="work.role.toLowerCase()")
      video(
        v-if="work.preview.type == 'video'" 
        :poster="work.preview.data.poster"
        autoplay 
        muted 
        loop 
        playsinline 
      )
        source(:src="work.preview.data.video[0].src" type="video/mp4")
      img(v-else :src="work.img")

.gallery
  ul
    a(
      v-for="item in gallery" 
      :href="item.type == 'item' ? `pages/${item.link}/index.php` : item.link"
      :target="_blank"
    )
      li(v-if="item.type == 'item'").item.element
        Item(:item="item")
      li(v-else-if="item.type == 'decor'").decor.element
        Decoration(:item="item")
        .clickable(v-if="item.clickable")
        .guidance(v-if="item.guidance")
      li(v-else-if="item.type == 'web'").web.element
        .url {{item.link.replace('https://www.','')}}
        img(:src="item.preview")
      li(v-else-if="item.type == 'art'" :class="['art','element', (item.link ? 'linked' : '')]")
        img(:src="item.path")
        a(
          :href="!item.link ? `https://www.instagram.com/${item.author}` : item.link" 
          target="_blank"
        ).author @{{item.author}}
</template>

<script>
export default {
  data() {
    return {
      gallery: [],
      works: [],
      spawndelay: 200,
    }
  },
  async created() {
    this.onLoad()
    fetch('https://www.artlebedev.ru/svalka/api/2019/?lang_id=1&data=works&works_tags=ds8x1mh&works_offset=0&works_limit=30&works_not_update_price=1')
      .then((res)=>{
        if(res.ok){
          res.json().then((data)=>{
            this.works = data.works?.list
          })
        }
      })
  },
  methods:{
    async onLoad(){
      this.loading = true
      const items = (await import('../assets/resources/items.json')).default
      const decors = (await import('../assets/resources/decors.json')).default
      const arts = (await import('../assets/resources/arts.json')).default
      const webs = (await import('../assets/resources/webs.json')).default
      this.refactoring(items, decors, arts, webs)

      this.$nextTick(()=>{
        const items = document.querySelectorAll('ul .element')
        items.forEach((item, index)=>{
          const delay = (index/items.length)*500
          setTimeout(()=>{
            item.style.opacity = 1
            item.style.transform = 'scale(1)'
          },delay+this.spawndelay)
        })
      })
    },
    random(min, max){
      return Math.floor(Math.random()*(max-min)+min)
    },
    refactoring(items, decors, arts, webs){

      // ДОБАВЛЕНИЕ ТИПА ITEM
      // ДОБАВЛЕНИЕ ТРЕХТИПОВОГО-КЛАССА
      // ДОБАВЛЕНИЕ НОМЕРА
      items.forEach((item, index) => {
        item.type = "item"
        item.number = index+1
        if(item.description.length > 120) {
          return item.subtype = 'large'
        }
        else if(item.description.length > 50) {
          return item.subtype = 'middle'
        }
        else{
          return item.subtype = 'small'
        }
      })

      // ДОБАВЛЕНИЕ ТИПА DECOR
      decors.forEach((decor) => { return decor.type = "decor" })

      // ДОБАВЛЕНИЕ ТИПА ART
      arts.forEach((art) => { return art.type = "art" })

      // ДОБАВЛЕНИЕ ТИПА ART
      webs.forEach((web) => { return web.type = "web" })

      const res = []
      const shiftD = Math.floor(items.length/(decors.length))
      const shiftA = Math.floor(items.length/(arts.length))
      const shiftW = Math.floor((items.length-1)/(webs.length))
      for(let i = 0, d = 0, a = 0, w = 0; i < items.length; i++){
        res.push(items[i])
        if((i+1)%shiftD==0 && decors[d])
          res.push(decors[d++])
        if((i+1)%shiftA==0 && arts[a])
          res.push(arts[a++])
        if((i+1)%shiftW==0 && webs[w]){
          res.push(webs[w++])
        }
      }
      this.gallery = res
    },
  }
}
</script>

<style lang="sass">
.works-wrapper
  position: relative
  z-index: 1
  .works
    display: flex
    align-items: center
    flex-wrap: wrap
    gap: 10px
  h1
    text-align: center
    margin-bottom: 20px
  .item
    position: relative
    height: 340px
    flex-grow: 1
    border-radius: 15px
    overflow: hidden
    border: none
    text-decoration: none
    color: inherit
    .job
      position: absolute
      bottom: 5px
      left: 5px
      border-radius: 5px
      padding: 5px 8px
      background: rgba(0,0,0,.8)
      color: white
    img, video
      width: 100%
      height: 100%
      object-fit: cover

.gallery
  transition: .6s cubic-bezier(0.6, 0.38, 0.3, 0.8)
  .element
    opacity: 0
    transform: scale(1.05)
    transition: .5s .3s ease-out
  .title-wrapper
    position: relative
    margin-bottom: .5rem
  .item:hover .title
    color: blue

.title
  font-size: var(--fsize-project-title)
  font-family: 'Coolvetica', Arial, sans-serif
  line-height: 95%
  text-shadow: 0 0 .5rem var(--color-text-invert)
  transition: .3s
.description
  text-shadow: 0 0 .5rem var(--color-text-invert)
  line-height: 115%
</style>

<style scoped lang="sass">
ul
  column-count: 5
  list-style-type: none
  counter-reset: section
  @media(max-width: 1024px)
    column-count: 3
  @media(max-width: 768px)
    column-count: 2
  @media(max-width: 425px)
    column-count: 1

li
  // background: rgba(0, 256, 0, 0.5)
  break-inside: avoid
  margin-bottom: 5rem

.decor
  position: relative
  display: flex
  justify-content: center
  .clickable, .guidance
    position: absolute
    right: 0
    bottom: 0
    transform: translate(-40%, 70%)
    pointer-events: none
    user-select: none
    width: 30px
    height: 30px
    background-repeat: no-repeat
    background-position: center
    background-size: 150% 150%
  .clickable
    background-image: url('/images/pointinghand.svg')
  .guidance
    width: 20px
    height: 20px
    background-image: url('/images/resizenortheastsouthwest.svg')

.art
  position: relative
  display: flex
  justify-content: center
  align-items: center
  aspect-ratio: 1/1
  img
    user-select: none
    pointer-events: none
    outline: 10px solid white
    box-shadow: 0 3px 10px 5px rgba(0, 0, 0, 0.5)
    width: 60%
  &.linked img
    box-shadow: 0 3px 70px 5px rgba(0, 0, 0, 0.4)
  .author
    position: absolute
    bottom: calc(20% - 15px)
    left: 50%
    transform: translate(-50%, 100%)
    font-size: 0.8rem
    padding: 5px 8px
    opacity: 0.5
    transition: .3s
    cursor: alias
    &:hover 
      opacity: 1
  &.linked .author
    opacity: 0.7
    &:hover
      opacity: 1

.web
  outline: 1px solid rgba(0,0,0,0.05)
  display: flex
  flex-direction: column
  position: relative
  overflow: hidden
  border-radius: 10px
  box-shadow: 0 20px 40px 0px rgba(0,0,0,0.2)
  .url
    text-align: center
    font-size: 12px
    padding: 2px
    width: 100%
    background: linear-gradient(to top, rgba(240,240,240,0.9), white)
    box-shadow: 0 0 10px 10px rgba(0,0,0,0.5)
    color: rgba(0,0,0,0.5)
  img
    width: 100%

</style>