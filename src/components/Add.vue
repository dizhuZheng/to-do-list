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
      <div>
          <label>Description:</label>
          <textarea v-model="description" class="textarea"></textarea>
      </div>

      <div>
          <label>Notes:</label>
          <textarea v-model="notes" class="textarea"></textarea>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Edit',

  data(){
    return {
      description: null,
      notes: null,
      date: '2019-01-03' // default: today's date
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
          const item = {
            description: this.description,
            // notes: this.notes,
            // date: this.date
          }
          this.$emit('addToList', item);
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
  background-color: sandybrown;
  border-radius: 20px;
  padding: 30px;
  float: right;
}

.textarea{
  resize:none;
  width: 100px;
  height: 60px;
}
</style>

/* eslint-disable */
