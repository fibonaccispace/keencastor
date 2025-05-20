<template lang="pug">
  template(v-if="isMain")
    #main-container
      Header(@toggleLanguage="restart")
      Gallery(ref="gallery")
      Footer(ref="footer")
  template(v-else)
    RouterView
</template>

<style lang="sass">
  .back
    background: rgba(0,0,0,0.1)
    width: fit-content
    padding: 10px 16px
</style>

<script>
export default {
  data() {
    return {
      theme: 'light'
    }
  },
  mounted(){
    this.setTheme()
    if(localStorage['lang']){
      this.$i18n.locale = localStorage['lang']
    }
  },
  computed: {
    isMain() {
      return this.$route.meta.main || false
    }
  },
  methods: {
    setTheme(){
      document.body.setAttribute('data-theme', this.theme)
    },
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
      this.setTheme()
    },
    restart(){
      this.$refs.gallery.refresh()
      this.$refs.footer.refresh()
    },
  }
}
</script>