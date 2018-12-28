<template>
  <div id="edit">
    <div class="border">
      <div class="doneImg" @click="addToList"></div>
      <div @click="closeDialog" class="closeImg"></div>
      <form style="text-align:left">
        <label>Description:</label>
        <textarea v-model="description" style="float:left;resize:none;" rows="5" cols="20"></textarea>
        <label>Date:</label>
        <button>skip</button>
        <p style="text-align:left">Notes:</p>
        <textarea v-model="notes" style="float:left;resize:none;" rows="5" cols="10"></textarea>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Edit',

  data(){
    return {
      description: null,
      notes:null
    }
  },

  methods:{
    isBlank(str) {
      if (!str||str.trim().length == 0) {
        return true
      }
    },

    openDialog(){
      this.$emit('open',false)
    },

    closeDialog(){
      this.$emit('guan',false)
    },

    addToList(){
      if(!this.$options.methods.isBlank(this.description))
        {
        this.$emit('childFn', this.description);
        this.$emit('guan',false);
        }
      else{
        alert("Input can't be null !")
      }
    }
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
  bottom: 25vh;
  left: 20vh;
  right: 25vh;
}

</style>
