<template>
  <div>
    <textarea v-model="values"></textarea>
  </div>
</template>

<script>

export default {
    data() {
        return {
            values: this.$store.state.todos[0].description
        }
    }
}
</script>
