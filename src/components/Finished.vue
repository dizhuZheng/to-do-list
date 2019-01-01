<template>
  <div id="finished">
    <div class="border">
    <img src="../assets/close.png" style="width:50px;
    height:50px;cursor:pointer; position:relative; float:right; top:-5px" @click="closeDialog">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Finished',

  data(){
    return {
      description: null,
      notes:null
    }
  },

  methods:{
    openDialog(){
      this.$emit('open',false)
    },

    closeDialog(){
      this.$emit('guan',false)
    }
  }
}
</script>

<style scoped>
.border{
  background-color: rgb(123, 10, 216);
  border-radius: 20px;
  padding: 50px;
  float:right;
}

</style>
