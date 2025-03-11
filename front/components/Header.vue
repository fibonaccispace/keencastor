<template lang="pug">

.header
  .logotype keencastor
  p.description 
    | a&nbsp;site about coding adventures, interesting tasks, 
    | quotes from books, pet projects, images, visualizations, 
    | generatives, web-games, interactive elements, mathematical 
    | funs, facts about numbers, photos, installations, art objects.
  p.description 
    | write here for your ideas&nbsp;&mdash; 
    a(href="mailto:box@keencastor.ru").email box@keencastor.ru
  input(placeholder="send here your ideas").ideas

</template>

<script>
</script>

<style scoped lang="sass">
.header
  // background: green
  margin: 0 auto
  width: 50%
  @media(max-width: 1024px)
    width: 70%
  @media(max-width: 768px)
    width: 100%

.logotype
  text-align: center
  font-size: 2rem

.ideas
  width: 100%
</style>
