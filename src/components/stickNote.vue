<template>
  <div id="stick-note">
    <div class="border">
      <div class="addImg" style= "font-size:20px; cursor: pointer;" @click = "showEdit=true"></div>
      <div @click="closeDialog" class="closeImg" ></div>
      <edit
       @open="o"
       v-if= "showEdit">
      </edit>

      <edit
       @guan="c"
       v-if= "showEdit">
     </edit>
    </div>
  </div>
</template>

<script>
import Edit from './Edit.vue'
var arr= [];

export default {
  name: 'StickNote',

  data(){
    return {
      showEdit: false,
    }
  },

  methods:{
    closeDialog(){
      this.$emit('closeDialog',false)
    },

    o(){
      this.showEdit = true;
    },

    c(){
      this.showEdit = false;
    }
  },

  components:{
    Edit
  }
}
</script>

<style scoped>
.addImg{
  width: 20px;
  height: 20px;
  float: left;
  margin-left: 5px;
  margin-top: 5px;
  cursor: pointer;
  background-image: url(../assets/add.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.closeImg{
  width: 30px;
  height:30px;
  float: right;
  margin-right: 5px;
  margin-top: 5px;
  cursor: pointer;
  background-image: url(../assets/close.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.border{
  text-align: center;
  background-color: rgb(148, 101, 194);
  border-radius: 20px;
  width: 60%;
  height: 60%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

</style>
