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
  computed: {
    isMain() {
      return this.$route.meta.main || false
    }
  }
}
</script>