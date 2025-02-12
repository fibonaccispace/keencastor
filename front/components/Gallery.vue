<template lang="pug">

.gallery
  ul
    a(v-for="item in gallery" :href="item.link" target="_blank")
      li(:class="[item.type]").small-item {{ item.description }}

</template>

<script>

export default {
  props: {
    items: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      gallery: []
    }
  },
  watch: {
    items() {
      this.items.forEach((item) => {
        if(item.description.length > 120) return item.type = "large-item"
        if(item.description.length > 50) return item.type = "middle-item"
        return item.type = "small-item"
      })
      this.gallery = this.items
    }
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

.decor
  border-radius: 50%
  background: blue

</style>
