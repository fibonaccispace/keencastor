<template lang="pug">
  template(v-if="isMain")
    Header
    Gallery
    Footer
  template(v-else)
    RouterView
</template>

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