<template lang="pug">
Header
Gallery(:items="items", :decors="decors", :arts="arts")
Footer
</template>

<script>
import Header from './components/Header.vue'
import Gallery from './components/Gallery.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Header, Footer, Gallery
  },
  data() {
    return {
      items: [],
      decors: [],
      arts: [],
    }
  },
  async created() {
    this.items = (await import('./assets/items.json')).default
    this.decors = (await import('./assets/decors.json')).default
    this.arts = (await import('./assets/arts.json')).default
  },
}
</script>