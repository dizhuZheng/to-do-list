<template>
  <div id="edit">
    <div class="border">
      <div class="doneImg" @click= "addToList"></div>
      <div @click = "closeDialog" class="closeImg"></div>
      <form style="text-align:left">
        <label>Discription:</label>
        <textarea style="float:left;resize:none;" rows="5" cols="20"></textarea>
        <label>Date:</label>
      </form>
      <p style="text-align:left">Notes:</p>
      <textarea style="float:left;resize:none;" rows="2" cols="10"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  data(){
    return {
    }
  },

  methods:{
    openDialog(){
      this.$emit('open',false)
    },

    closeDialog(){
      this.$emit('guan',false)
    },

    addToList(){
      this.$emit('guan',false)
    },

  }
}
</script>

<style scoped>
.doneImg{
  width: 10px;
  height: 10px;
  float: left;
  margin-left: 5px;
  margin-top: 5px;
  cursor: pointer;
  background-image: url(../assets/done.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.closeImg{
  width: 20px;
  height: 20px;
  float: right;
  margin-right: 5px;
  margin-top: 5px;
  cursor: pointer;
  background-image: url(../assets/close.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.border{
  background-color: rgb(201, 95, 95);
  border-radius: 20px;
  position: fixed;
  bottom: 15vh;
  left: 10vh;
  right: 25vh;
}

</style>
