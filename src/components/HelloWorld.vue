<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <div class="container">
      <span class="c">
        <dizhu-btn :msg="msg1" @click="flag=true,value1=false, value2=false">
          <img slot="icon" src="../assets/i.png">
        </dizhu-btn>
      </span>
      <span class="c">
        <dizhu-btn :msg="msg2" @click="value1=true,flag=false, valu2=false" :class="{active: flag}">
          <img slot="icon" src="../assets/done.png">
        </dizhu-btn>
      </span>
      <span class="c">
        <dizhu-btn
          :msg="msg3"
          @click="value2=true, flag=false, value1=false"
          :class="{active: flag}">
          <img slot="icon" src="../assets/close.png">
        </dizhu-btn>
      </span>
    </div>
    <stickNote v-if="flag"></stickNote>
    <finished_list v-if="value1" :msg="msg2"></finished_list>
    <unfinished_list v-if="value2" :msg="msg3"></unfinished_list>
  </div>
</template>

<script>
import quiButton from '../components/quiButton.vue'
import stickNote from '../components/stickNote.vue'
import finished_list from '../components/finished_list.vue'
import unfinished_list from '../components/unfinished_list.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },

  data() {
    return {
      message: 'My To-do List',
      flag: false,
      value1: false,
      value2: false,
      msg1: 'Create Events',
      msg2: 'Finished Events',
      msg3: 'Unfinished Events',
    }
  },
  components: {
    'dizhu-btn': quiButton,
    'stickNote': stickNote,
    'finished_list': finished_list,
    'unfinished_list': unfinished_list
  }
}
</script>

<style>
.active {
  display: block;
  margin-top: 20px;
  margin-left: 20px;
}

h1 {
  position: relative;
  float: left;
  top: 0px;
}

body {
  background-color: lightskyblue;
}

.container {
  position: absolute;
  float: left;
  top: 150px;
}

.c {
  position: relative;
  margin-left: 20px;
}
</style>
