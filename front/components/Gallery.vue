<template lang="pug">
.gallery
  ul
    a(v-for="item in gallery" :href="item.link")
      li(v-if="item.type == 'item'")
        Item(:item="item")
      li(v-else-if="item.type == 'decor'" :class="item.class")
      li(v-else-if="item.type == 'art'" :class="item.class" :title="item.author")
        img(:src="item.path" width="100%")
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
          item.subtype = 'large'
          item.class = ["large-item", "item"]
          return item
        }
        else if(item.description.length > 50) {
          item.subtype = 'middle'
          item.class = ["middle-item", "item"]
          return item
        }
        else{
          item.subtype = 'small'
          item.class = ["small-item", "item"]
          return item
        }
      })

      // ДОБАВЛЕНИЕ ТИПА DECOR
      decors.forEach((decor) => {
        decor.type = "decor"
        return decor.class = ["decor"]
      })

      // ДОБАВЛЕНИЕ ТИПА ART
      arts.forEach((art) => {
        art.type = "art"
        return art.class = ["art"]
      })

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
    font-weight: 600
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
  aspect-ratio: 1/1
  background: blue
  opacity: .1

.art
  display: flex
  justify-content: center
  align-items: center
  aspect-ratio: 1/1

</style>
