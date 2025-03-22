<template lang="pug">

.header
  .logotype 
    span keencastor
  p.description 
    | a&nbsp;site about coding adventures, interesting tasks, 
    | quotes from books, pet projects, images, visualizations, 
    | generatives, web-games, interactive elements, mathematical 
    | funs, facts about numbers, photos, installations, art objects.
  .statistic statistic graph
  input(placeholder="send here your ideas").input

</template>

<script>
</script>

<style scoped lang="sass">
.header
  margin: 0 auto
  width: 50%
  @media(max-width: 1440px)
    width: 60%
  @media(max-width: 1024px)
    width: 70%
  @media(max-width: 768px)
    width: 100%

.logotype
  margin-bottom: 1rem
  text-align: center
  font-size: var(--fsize-logo)
  font-family: 'Inter-B', Arial, sans-serif
  span
    cursor: pointer
    &:hover
      color: blue

.statistic
  height: 3rem
  background: #eee
  display: flex
  justify-content: center
  align-items: center
  color: #aaa

.input
  width: 100%
</style>
