<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="list">
      <br><br>
      <ul>
        <button style="font-size:20px;" v-on:click="add()" v-for="todo in todos" :key="todo.text" :class="'header-button ' + todo.class">
          {{todo.text}}
        </button>
        <Today></Today>
      </ul>
      <div class="dialog-cover back"  v-if="show"  @click="closeMyself"></div>
    </div>
  </div>
</template>

<script>
import Today from './Today.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data(){
    return {
      show: false,
      todos: [
        {text:'Overdue', class:"overdue-item"},
        {text:'Today', class:"today-item"},
        {text: 'Tomorrow', class:"tomorrow-item"}
      ]
    }
  },

  components: {
    Today
  },

  methods: {
  }
}
</script>

<style scoped>
h1{
  position: absolute;
  left:0px;
  top:0px;
}
.dialog{
  position: relative;
  color:sandybrown;
  font-size: 16px;
}

.dialog-cover{
  background: rgba(0,0,0, 0.8);
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.dialog-content{
    position: fixed;
    top: 35%;
     /* 移动端使用felx布局  */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 300;
 }

.today-item{
  color:rgb(32, 161, 28);
}
.tomorrow-item{
  color:purple;
}
.overdue-item {
  color: orange;
}
.bt {
  position: relative;
  right: 40px;
  top: 80px;
  border:none;
  border-radius: 50%;
  color: rgb(238, 22, 22);
  padding: 8px;
  text-align: center;
  margin-left: 50px;
  cursor: pointer;
}

.md-effect-4 .md-content {
	-webkit-transform: scale(0) rotate(720deg);
	-moz-transform: scale(0) rotate(720deg);
	-ms-transform: scale(0) rotate(720deg);
	transform: scale(0) rotate(720deg);
	opacity: 0;
}

.md-show.md-effect-4 ~ .md-overlay,
.md-effect-4 .md-content {
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
	transition: all 0.5s;
}

.md-show.md-effect-4 .md-content {
	-webkit-transform: scale(1) rotate(0deg);
	-moz-transform: scale(1) rotate(0deg);
	-ms-transform: scale(1) rotate(0deg);
	transform: scale(1) rotate(0deg);
	opacity: 1;
}

.header-button {
  margin-right: 180px;
}

</style>
