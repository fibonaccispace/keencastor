<template lang="pug">
Header
Gallery(:items="items")
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
      items: []
    }
  },
  async created() {
    const response = await import('./assets/data.json')
    this.items = await response.default
  },
}
</script>