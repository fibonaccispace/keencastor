<template lang="pug">
.footer
  span ©&nbsp;{{startYear}}-{{currentYear}}&nbsp;keencastor 
</template>

<script>
export default{
  data(){
    return{
      startYear: '2000',
      currentYear: new Date().getFullYear()
    }
  },
}
</script>

<style scoped lang="sass">
.footer
  text-align: center
</style>
