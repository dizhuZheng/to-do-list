/* eslint-disable */
<template>
  <div id="edit">
    <div class="border">
      <img
        src="../assets/done.png"
        style="width:30px; height:30px;cursor:pointer; position:relative; float:left; top:0px"
        @click="addToList"
      >
      <img
        src="../assets/close.png"
        style="width:50px; height:50px;cursor:pointer; position:relative; float:right; top:-5px"
        @click="closeDialog"
      >
      <label>Description:</label>
      <textarea v-model="description" style="resize:none;" rows="5" cols="10"></textarea>

      <p style="text-align:left">Notes:</p>
      <textarea v-model="notes" style="resize:none;" rows="5" cols="25"></textarea>
      <label>Date:</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  props: {
    msg: {
      type: Object,
      required: false
    },
    notes: {
      type: String
    }
  },

  data(){
    return {
      description: null,
      notes: null,
      date: '2019-01-03',
      value: 'cdjsbcdi'
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
      this.$emit('close',false)
    },

    addToList()
    {
      if(!this.$options.methods.isBlank(this.description))
        {
          this.$emit('addToList',{
            description: this.description,
            notes: this.notes,
            date: this.date
          });
          this.$emit('close',false);
        }
      else{
        alert("Input can't be null !")
      }
    }
  }
}
</script>

<style scoped>
.border {
  background-color: rgb(150, 184, 58);
  border-radius: 20px;
  padding: 30px;
  float: right;
}
</style>

/* eslint-disable */
