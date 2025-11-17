<template lang="pug">
    .start-wrapper
        .letter
            span
                slot
</template>

<style lang="sass">
.start-wrapper
    display: inline-block
    animation: down .4s calc(var(--index)/10) ease-out forwards
.letter
    padding: 30px 0 0 0
    animation: unpix .2s ease forwards
    &:hover
        animation: pix 0s ease forwards
        span 
            transform: translate(0,-30px) rotate(var(--angle))
            animation: none
    span
        display: block
        position: relative
        transition: transform .3s cubic-bezier(0.42, 0, 0.33, 1.52)
   
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

@keyframes down
    0% 
        transform: none
    20%
        transform: translate(0,-30px) rotate(var(--angle))
    100%
        transform: none
</style>

<script>
export default {
  props: ['letter']
}
</script>
