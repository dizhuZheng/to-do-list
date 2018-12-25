<template>
  <div id="app">
    <HelloWorld msg="To-do List"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

body{
  background-color: lightskyblue;
}

.list{
  background-color: white;
  font-size: 15px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  list-style-type: circle;
  margin: 0 10px;
}

.bt {
  background-color: rgb(29, 27, 189); /* Green */
  border:none;
  border-radius: 10px;
  color: white;
  padding: 10px;
  text-align: center;
  margin-left: 50px;
  display: inline-block;
  font-size: 30px;
  cursor: pointer;
}

div{
  background-color: white;
  margin-left: 0px;
  padding:60px;
}
</style>
