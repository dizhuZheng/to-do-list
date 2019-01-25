<template>
  <div>
    <p v-for="value in values" :key="value">{{ value.text }}</p>
  </div>
</template>

<script>

export default {
    data() {
        return {
            values: this.$store.state.todos.filter(todo => todo.done)
        }
    },
  computed: {
    doneTodosCount() {
      return this.$store.state.todos.filter(todo => todo.done)
    }
  }
}
</script>
