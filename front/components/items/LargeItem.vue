<template lang="pug">
  .large-item
    .preview
      img(src="/public/images/assist.png")
    .content
      p.title {{item.title}}
      p {{item.description}}
</template>

<script>
export default{
  props: ['item']
}
</script>

<style scoped lang="sass">
.large-item
  position: relative
  display: flex
.preview
  flex-grow: 1
  img
    z-index: -1
    user-select: none
    pointer-events: none
    position: absolute
    top: 0
    left: 0
    transform: translate(-30%,-10%)
    width: 200px
    @media(max-width: 768px)
      transform: translate(-20%,-10%)
.content
  width: 60%
  @media(max-width: 768px)
    width: 70%
  .title
    font-size: 1.2rem
    font-weight: 600
</style>
