<template lang="pug">
.footer(ref="footer")
  .footer-gallery
    ul
      a(v-for="item in gallery" :href="item.link")
        li(v-if="item.type == 'item'").item {{ item.title.toLowerCase() }}
  span ©&nbsp;{{startYear}}-{{currentYear}}&nbsp;keencastor 
</template>

<script>
export default {
  data() {
    return {
      gallery: [],
      startYear: '2000',
      currentYear: new Date().getFullYear(),
    }
  },
  async created() {
    const items = (await import('../assets/resources/items.json')).default
    const decors = (await import('../assets/resources/decors.json')).default
    const arts = (await import('../assets/resources/arts.json')).default
    this.refactoring(items, decors, arts)
    this.$nextTick(()=>{
      setTimeout(()=>{
        this.$refs.footer.style.opacity = 1
      },100)
    })
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
      this.gallery = res.reverse()
    },
  }
}
</script>

<style scoped lang="sass">
.footer
  text-align: center
  transition: .3s
  opacity: 0

.footer-gallery
  margin-bottom: 1rem
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
    text-align: left
    break-inside: avoid
    &:hover
      background: black
      color: white
</style>
