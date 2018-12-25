<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="list">
      <button class="bt">+</button>
      <br><br>
      <ul>
        <li v-for="todo in todos" :key="todo.text">
          {{todo.text}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data(){
    return {
      show: false,
      curr: 0,
      todos: [
        {text:'Overdue'},
        {text:'Today'},
        {text: 'Tomorrow'}
      ]
    }
  },

  methods: {
    showContent: function()
    {
      this.show = true
    }
  },
  add: function(index)
  {
    this.curr = index;
  }
  // add2: function(e)
  // {
  //   e.stopPropagation();
	// 		counts["today"] ++;
  // },
  // add3: function(e)
  // {
  //   e.stopPropagation();
	// 		counts["tomorrow"] ++;
  // }
}
</script>

<style scoped>
h1{
  margin-left: 0px;
  margin-top:0px;
}
</style>
