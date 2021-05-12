<template>

  <div>
    <input type="radio"
           :value="value"
           v-on:change="changeEvent"
    >
    <slot></slot>
    <template v-if="!$slots.default">{{value}}</template>
  </div>

  <!-- v-on:input="$emit('input', $event.target.value)"-->
</template>

<script>
    export default {
        name: "customIpt",
        props:{
          value: '',

        },
        mounted() {
          console.log(this.$slots);
        },
        methods: {
          changeEvent($event) {
            this.$emit('change', $event.target.value);
           //  this.$emit('input', $event.target.value);
          }
        }
    }
</script>

<style scoped>

</style>
