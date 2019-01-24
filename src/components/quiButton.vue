<template>
    <button class="qui_btn" @click="click">
        <slot name="icon"></slot>
        <span>{{msg}}</span>
    </button>
</template>

<script>
export default {
  props: {
    msg: {
        type: String,
        default: 'click'
    }
  },
  methods: {
      click: function(){
          this.$emit('click')
      }
  }
}
</script>

<style scoped>
.qui_btn{
    background-color: rebeccapurple;
    color: white;
    border-radius: 12px;
    padding: 10px;
}
</style>
