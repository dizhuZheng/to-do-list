<template>
  <div id="stick-note">
    <div class="border">
      <div class="addImg"></div>
      <div @click="closeDialog" class="closeImg"></div>
      <edit>djksfeg</edit>
    </div>
  </div>
</template>

<script>
import Edit from './Edit.vue'

export default {
  name: 'StickNote',

  data(){
    return {
      show: true
    }
  },

  methods:{
    closeDialog(){
      this.$emit('closeDialog',false)
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
  background-image: url(../assets/plus.png);
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
  text-align: center;
  background-color: rgb(148, 101, 194);
  border-radius: 20px;
  width: 50%;
  height: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

</style>
