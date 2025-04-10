<template lang="pug">
  .name Neural network
  .content
    .canvas
      canvas(width="500" height="500")
    .solution
      p solution
</template>

<style lang="sass" scoped>
*
  outline: 1px dashed
  
.name
  font-size: 3rem
  text-align: center
  font-family: 'Coolvetica', Arial, sans-serif
  margin-bottom: 3rem

.content
  display: flex
  align-items: flex-start
  justify-content: center
  gap: 3rem
  .canvas
    width: 50%
    display: flex
    justify-content: flex-end
  .solution
    width: 50%
  canvas
    background: red

</style>

<script>
export default {
  data() {
    return {
    }
  },
}
</script>