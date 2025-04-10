<template lang="pug">
  template(v-if="isMain")
    #main-container
      Header
      Gallery
      Footer
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
  }
}
</script>