<template lang="pug">

.gallery
  ul
    a(v-for="elem in gallery" :href="elem.link")
      li(
        v-if="elem.type == 'item'" 
        :class="elem.class"
      ) 
        span {{ elem.description }}
      li(
        v-else-if="elem.type == 'decor'" 
        :class="elem.class"
      )
      li(
        v-else-if="elem.type == 'art'" 
        :class="elem.class"
        :title="elem.author"
      )

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
      items.forEach((item) => {
        item.type = "item"
        if(item.description.length > 120) return item.class = ["large-item", "item"]
        if(item.description.length > 50) return item.class = ["middle-item", "item"]
        return item.class = ["small-item", "item"]
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

<style scoped lang="sass">

ul
  column-count: 5
  list-style-type: none
  counter-reset: section

  @media(max-width: 1440px)
    column-count: 4
  @media(max-width: 1024px)
    column-count: 3
  @media(max-width: 768px)
    column-count: 2
  @media(max-width: 425px)
    column-count: 1

li
  background: #aaa
  aspect-ratio: 1/1
  break-inside: avoid
  margin-bottom: 1rem

.small-item
  background: yellow

.middle-item
  background: orange

.large-item
  background: red

.item
  border-radius: 10px

.decor
  border-radius: 50%
  background: blue

.art
  background: black

</style>
