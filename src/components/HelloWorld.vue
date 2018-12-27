<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button style= "font-size:20px; cursor: pointer;" @click = "showDialog=true">Click Here !</button>
     <stick-note
      @closeDialog="close"
      v-if= "showDialog">
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
      showDialog: false
    }
  },
  methods: {
    close(){
      this.showDialog = false;
    }
  },
   components: {
    stickNote
  }
}
</script>

<style scoped>
h1{
  position: absolute;
  left:0px;
  top:0px;
}
</style>
