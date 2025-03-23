<template lang="pug">
    component(:is="item.component")
</template>

<script>
export default {
  props: ['item']
}
</script>