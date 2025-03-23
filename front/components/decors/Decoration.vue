<template lang="pug">
    component(:is="item.component" :style="item.style")
</template>

<script>
export default {
  props: ['item']
}
</script>