<template lang="pug">
    .letter
        span
            slot
</template>

<style lang="sass">

.letter
    display: inline-block
    padding: 30px 0 0 0
    animation: unpix .7s ease forwards
    &:hover
        animation: pix 0s ease forwards
        span 
            transform: translate(0,-30px) rotate(var(--angle))
    span
        display: block
        position: relative
        transition: .3s ease
   
@keyframes pix
    from 
        filter: none
    to
        filter: url(#pixel)

@keyframes unpix
    from 
        filter: url(#pixel)
    to
        filter: none
</style>

<script>
export default {
  props: ['letter']
}
</script>
