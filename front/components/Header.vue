<template lang="pug">

.header
  span.logotype keencastor
  p.description 
    | a&nbsp;site about coding adventures, interesting tasks, 
    | quotes from books, pet projects, images, visualizations, 
    | generatives, web-games, interactive elements, mathematical 
    | funs, facts about numbers, photos, installations, art objects.
  p.description 
    | if&nbsp;you want to&nbsp;suggest something interesting, 
    | add your crazy idea here or&nbsp;just chat&nbsp;&mdash; 
    | write to&nbsp;the mail 
    a(href="mailto:box@keencastor.ru").email box@keencastor.ru

</template>

<script>
</script>

<style scoped lang="sass">
.header
    width: 50%
    @media(max-width: 1024px)
        width: 70%
    @media(max-width: 768px)
        width: 100%

.logotype
    font-size: 2rem
</style>
