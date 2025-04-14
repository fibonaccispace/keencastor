<template lang="pug">
  .middle-item
    .content
      .title-wrapper
        .title(v-html="item.title")
      .description(v-html="item.description")
    .preview
      img(:src="tempImagePath")
</template>

<script>
export default{
  props: ['item'],
  computed:{
    tempImagePath(){
      const paths = ['assist', 'bong', 'cola', 'hz', 'smile', 'discord', 'ear', 'home', 'medusa', 'tail']
      const rnd = paths[Math.floor(Math.random()*paths.length)]
      return `/public/images/${rnd}.png`
    }
  }
}
</script>

<style scoped lang="sass">
.middle-item
  position: relative
  display: flex
  .preview
    position: relative
    flex-grow: 1
    img
      z-index: -5
      user-select: none
      pointer-events: none
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      max-width: var(--size-middle-preview)
      max-height: var(--size-middle-preview)
  .content
    width: 60%
</style>
