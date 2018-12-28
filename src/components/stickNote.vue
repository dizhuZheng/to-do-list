<template>
  <div id="stick-note">
    <div class="border">
      <img src="../assets/add.png" style="width:50px;
  height:50px;cursor:pointer; position:fixed; right: 0px; bottom:0px" @click="showEdit=true">
      <edit
       @open="o"
       @guan="c"
       @childFn="parentFn"
       v-if="showEdit">
       </edit>
       <div>
       <li style= "font-size: 25px;" v-for="msg in messages" :key="msg">&nbsp; {{ msg }}
       <img src="../assets/edit.png" style="width:25px;
  height:25px;">&nbsp;<img src="../assets/delete.png" style="width:23px;
  height:23px;"></li>
       </div>
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
      messages: []
    }
  },

  methods:{
    o(){
      this.showEdit = true;
    },

    c(){
      this.showEdit = false;
    },

    parentFn(payload){
      this.messages.push(payload);
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

</style>
