<template lang="pug">
  template(v-if="isMain")
    #main-container
      Header(@toggleTheme="toggleTheme")
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
    if(localStorage['theme']){
      this.setTheme(localStorage['theme'])
    }else{
      this.setTheme()
    }
    
    window.addEventListener('keydown', this.handleKey)
  },
  beforeUnmount(){
    window.removeEventListener('keydown', this.handleKey)
  },  
  computed: {
    isMain() {
      return this.$route.meta.main || false
    }
  },
  methods: {
    handleKey(e) {
      const isCtrl = e.ctrlKey || e.metaKey
      if (isCtrl && e.keyCode === 66) {
        e.preventDefault()
        this.toggleTheme()
      }
    },
    setTheme(t = this.theme){
      document.body.setAttribute('data-theme', t)
      const themeText = document.getElementById('theme')
      if(themeText){
        themeText.innerHTML = t+'&nbsp'
      }
      localStorage['theme'] = t
    },
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
      this.setTheme()
    },
  }
}
</script>