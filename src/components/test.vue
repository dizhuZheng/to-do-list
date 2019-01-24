<template>
    <button @click="setValue">setValue</button>
</template>

<script>
export default {
  data(){
      return {
          value: [1,2,3,4,5]
      }
  },
  methods: {
      setValue: function(){
          this.$emit('getData', this.value)
      }
  }
}
</script>
