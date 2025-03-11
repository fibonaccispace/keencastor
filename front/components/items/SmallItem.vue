<template lang="pug">
  .small-item
    .content
      p {{item.title}}
      p {{item.description}}
</template>

<script>
export default{
  props: ['item']
}
</script>

<style scoped lang="sass">
.small-item
  // background: yellow
</style>
