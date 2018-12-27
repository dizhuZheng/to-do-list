<template>
  <div id="edit">
    <div class="border">
      <div class="doneImg"></div>
      <div class="closeImg"></div>
      <br><br>
      <form style="text-align:left">
        <label>Discription:</label>
        <input type="text"> &nbsp;
        <label>Date:</label>
        <input type="text">
      </form>
      <p style="text-align:left">Notes:</p>
      <textarea style="float:left;resize:none;" rows="15" cols="20"></textarea>
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
  // methods:{
  //   closeDialog(){
  //     this.$emit('guan',false)
  //   }
  // }

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
  width: 10px;
  height: 10px;
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
  /* width: 80%;
  height: 90%; */
  /* position: absolute; */
  position: fixed;
  bottom: 0vh;
  left: 0vh;
  /* left: 50%;
  top: 50%; */
}

/* .container{
  border: 2px solid black;
  margin-left: 0;
  width: 50%;
  height: 50%;
  text-align: left;
  overflow: scroll;
} */
</style>
