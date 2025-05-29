<template lang="pug">
  .middle-item
    .content
      .title-wrapper
        .title(v-html="title")
      .description(v-html="description")
    .preview
      img(:src="tempImagePath")
</template>

<script>
export default{
  props: ['item'],
  computed:{
    title(){
      if(this.item.shortName){
        const localName = this.$t(`items.${this.item.shortName}.title`)
        if(localName) return localName
      }
      return this.item.title
    },
    description(){
      if(this.item.shortName){
        const localName = this.$t(`items.${this.item.shortName}.description`)
        if(localName) return localName
      }
      return this.item.description
    },
    tempImagePath(){
      const paths = ['assist', 'bong', 'cola', 'hz', 'smile', 'discord', 'ear', 'home', 'medusa', 'tail']
      const rnd = paths[Math.floor(Math.random()*paths.length)]
      return `images/${rnd}.png`
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
