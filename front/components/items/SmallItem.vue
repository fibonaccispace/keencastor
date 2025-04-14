<template lang="pug">
  .small-item 
    .content
      .preview
        img(:src="tempImagePath")
        .title-wrapper
          .title(v-html="item.title")
        .description(v-html="item.description")
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
.small-item
  padding: 1rem 0
  position: relative
  .preview
    position: relative
    min-height: calc(var(--size-small-preview) / 2)
    display: flex
    flex-direction: column
    justify-content: center
    .description
      text-align: right
    img
      z-index: -5
      user-select: none
      pointer-events: none
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      max-width: var(--size-small-preview)
      max-height: var(--size-small-preview)
</style>
