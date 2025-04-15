<template lang="pug">
  .large-item
    .title-wrapper
      .title(v-html="title")
    .icon-description-wrapper
      .preview
        //- img(:src="tempImagePath.low")
        img(:src="tempImagePath.high")
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
      const paths = ['assist', 'bong', 'cola', 'hz', 'smile', 'discord', 'ear', 'home', 'medusa', 'tail']
      const rnd = paths[Math.floor(Math.random()*paths.length)]
      return{
        low: `/public/images/${rnd}_low.png`,
        high: `/public/images/${rnd}.png`
      }
    }
  }
}
</script>

<style scoped lang="sass">
.large-item
  position: relative
  .icon-description-wrapper
    display: flex
    .preview
      position: relative
      flex-grow: 1
      img
        z-index: -5
        user-select: none
        pointer-events: none
        position: absolute
        top: 0
        left: 50%
        transform: translate(-50%, 0)
        max-width: var(--size-large-preview)
        max-height: var(--size-large-preview)
    .description
      width: 60%
      @media(max-width: 768px)
        width: 70%
</style>
