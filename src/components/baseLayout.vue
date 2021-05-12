<template>
    <div class="base-layout">
      <input type="radio"
             :value="12"
             v-model="value"
             v-on:change="handleChange"
      >
    </div>
</template>

<script>
    export default {
        name: "baseLayout",
        data() {
          return {
            user: {
              name: 'yellow',
              sex: 'boy'
            },
            obj: undefined
          }
        },
        inheritAttrs: false,
        props: {
          value: ''
        },
        mounted() {

        },
        methods: {
          handleChange($event) {
            this.$emit('input', $event.target.value);
            this.$emit('change', $event.target.value);
          }
        }
    }
</script>

<style scoped>

</style>
