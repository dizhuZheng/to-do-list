<template>
  <div class="border">
    <h3 style="position: relative; margin-left: 10px;">{{msg}}</h3>
    <p v-for="value in values" :key="value.messageID">{{ value.description }}</p>
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
      values: this.$store.state.todos.filter(todo => todo.finished)
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
</style>
