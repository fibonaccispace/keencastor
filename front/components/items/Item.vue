<template lang="pug">
  component(:is="getComponent(item.subtype)" :item="item")
  img(src="/images/new.svg" v-if="item.new").new-ico
</template>

<style lang="sass" scoped>
.new-ico
  position: absolute
  top: 50%
  left: 50%
  z-index: -10
  transform: translate(-50%,-50%) scale(.8)
</style>

<script>
export default{
  props: ['item'],
  methods:{
    getComponent(subtype) {
      const components = {
        large: 'LargeItem',
        middle: 'MiddleItem',
        small: 'SmallItem'
      }
      return components[subtype] || null
    }
  }
}
</script>
