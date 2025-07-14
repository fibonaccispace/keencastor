<template lang="pug">
  .small-item 
    .content
      .preview
        //- img(:src="tempImagePath.high" :style="item.imageStyle")
        .title-wrapper
          .title(v-html="title")
        .description(v-html="description")
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
      return {high:this.item.image}
      const paths = ['assist', 'bong', 'cola', 'hz', 'smile', 'discord', 'ear', 'home', 'medusa', 'tail']
      const rnd = paths[Math.floor(Math.random()*paths.length)]
      return `images/${rnd}.png`
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
