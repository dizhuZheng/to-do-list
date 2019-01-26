<template>
  <div class="border">
    <h3 style="position: relative; margin-left: 10px;">{{msg}}</h3>
    <p v-for="(value,index) in values" :key="value.messageID ">{{index}}.&nbsp;&nbsp;&nbsp;{{ value.description }}</p>
  </div>
</template>

<script>

export default {
  props: {
    msg: {
      type: String,
      default: "list"
    }
  },
  data() {
    return {
      count: 0,
      values: this.$store.state.todos.filter(todo => todo.finished),
    }
  }
}
</script>

<style scoped>
.border {
  text-align: center;
  border-style: solid;
  background-color: plum;
  border-radius: 20px;
  width: 30%;
  height: 55%;
  position: absolute;
  left: 60%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
}
p{
  position: relative;
  margin-top: 5px;
  margin-left: -250px;
}
</style>
