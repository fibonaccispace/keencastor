<template lang="pug">

.header
  .logotype 
    span keencastor
  p.description 
    | a&nbsp;site about coding adventures, interesting tasks, 
    | quotes from books, pet projects, images, visualizations, 
    | generatives, web-games, interactive elements, mathematical 
    | funs, facts about numbers, photos, installations, art objects.
  p.description 
    | write here for your ideas&nbsp;&mdash; 
    a(href="mailto:box@keencastor.ru").email box@keencastor.ru
  .statistic statistic graph
  input(placeholder="send here your ideas").ideas

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
  text-align: center
  font-size: var(--fsize-logo)
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

.ideas
  width: 100%
</style>
