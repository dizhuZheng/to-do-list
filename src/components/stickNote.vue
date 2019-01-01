<template>
  <div id="stick-note">
    <div class="action">
      <button type="button">Unfinished Tasks</button>
      <button type="button">Finished Tasks</button>
    </div>
    <div class="border">
      <img src="../assets/add.png" style="width:50px;
      height:50px;cursor:pointer; position:fixed; right: 0px; bottom:0px" @click="showEdit=true">
      <edit
        @open="open"
        @close="close"
        @addToList="addToList"
        v-if="showEdit">
       </edit>
       <li :class="'todo-finished-' + msg.finished" v-for="(msg,index) in messages" :key="msg.messageID">
          {{msg.description}}
          <span class="note_buttons">
            <img src="../assets/done.png" @click="todoDone(index)">
            <img src="../assets/edit.png">
            <img src="../assets/delete.png" @click="deleteMessage(index)">
          </span>
       </li>
    </div>
  </div>
</template>

<script>
import Edit from './Edit.vue'

export default {
  name: 'StickNote',

  data(){
    return {
      showEdit: false,
      messages:[],
      messageID: 0,
    }
},

  methods:{
    open(){
      this.showEdit = true;
    },

    close(){
      this.showEdit = false;
    },

    addToList(payload){
      const listItem = {
        messageID: this.messageID,
        finished: false,
        description: payload.description
      }
      this.messageID = this.messageID + 1
      this.messages.push(listItem);
    },

    deleteMessage(index){
      this.messages.splice(index,1)
    },

    todoDone(index){
      console.log(index + 'is done!')
      this.messages[index].finished = true;
    }
  },

  components:{
    Edit
  }
}
</script>

<style scoped>

.border{
  text-align: left;
  border-style: dashed;
  background-color:lemonchiffon;
  border-radius: 20px;
  width: 50%;
  height: 65%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  overflow:auto;
}

.active{
  text-decoration: line-through;
}
.action{
  margin-top: 6%;
  margin-left: -20px;
}

.note_buttons img{
  float: right;
  margin: 6px;
}

.todo-finished-true {
  font-size:25px;
  text-decoration: line-through;
}

.todo-finished-false {
  font-size:25px;
  text-decoration: none;
}
</style>
