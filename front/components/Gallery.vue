<template lang="pug">
.gallery
  ul
    a(v-for="item in gallery" :href="item.link")
      li(v-if="item.type == 'item'")
        Item(:item="item")
      li(v-else-if="item.type == 'decor'").decor
        Decoration(:item="item")
      li(v-else-if="item.type == 'art'").art
        img(:src="item.path")
        a(:href="`https://www.instagram.com/${item.author}`" target="blank").author @{{item.author}}
</template>

<script>
export default {
  data() {
    return {
      gallery: []
    }
  },
  async created() {
    const items = (await import('../assets/resources/items.json')).default
    const decors = (await import('../assets/resources/decors.json')).default
    const arts = (await import('../assets/resources/arts.json')).default
    this.refactoring(items, decors, arts)
  },
  methods:{
    random(min, max){
      return Math.floor(Math.random()*(max-min)+min)
    },
    refactoring(items, decors, arts){

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

      const res = []
      const shiftD = Math.floor(items.length/(decors.length))
      const shiftA = Math.floor(items.length/(arts.length))
      for(let i = 0, d = 0, a = 0; i < items.length; i++){
        res.push(items[i])
        if((i+1)%shiftD==0 && decors[d])
          res.push(decors[d++])
        if((i+1)%shiftA==0 && arts[a])
          res.push(arts[a++])
      }
      this.gallery = res
    },
  }
}
</script>

<style lang="sass">
.gallery
  .title-wrapper
    position: relative
    margin-bottom: .5rem
  .number
    z-index: -1
    position: absolute
    top: 0
    left: 0
    transform: translate(-50%,-60%)
    font-size: 2rem
    font-style: italic
    opacity: .1
  .title
    font-size: var(--fsize-project-title)
    font-family: 'Inter-B', Arial, sans-serif
    line-height: 95%
    text-shadow: 0 0 .5rem var(--color-text-invert)
  .description
    text-shadow: 0 0 .5rem var(--color-text-invert)
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
  margin-bottom: 3rem

.decor
  // outline: 1px dashed black
  display: flex
  justify-content: center

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
</style>