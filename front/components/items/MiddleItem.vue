<template lang="pug">
  .middle-item
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
.middle-item
  // background: orange
</style>
