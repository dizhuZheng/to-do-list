<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <stick-note>
    </stick-note>
  </div>
</template>

<script>
import stickNote from './stickNote.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data(){
    return {
    }
  },
  methods: {
  },
   components: {
    stickNote
  }
}
</script>

<style scoped>
h1{
  position: relative;
  float:left;
  top:0px;
}
</style>
