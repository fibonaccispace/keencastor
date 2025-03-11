<template lang="pug">
  component(:is="getComponent(item.subtype)" :item="item")
</template>

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
