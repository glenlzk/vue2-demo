<template>
  <a :href="url">
    <slot></slot>
    <template v-if="!$slots.default">{{url}}</template>
  </a>
</template>

<script>
    export default {
        name: "testLink",
        props: {
          url: String,
        },
    }
</script>

<style scoped>

</style>
