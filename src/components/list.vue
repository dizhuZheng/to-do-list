<template>
  <div class="border">
    <h3 style="position: relative; margin-left: 10px;">{{msg}}</h3>
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
      infos:[]
    }
  },
  methods: {
    click: function() {
      this.$emit("click");
    }
  },
}
</script>

<style>
.border {
  text-align: center;
  border-style: solid;
  background-color: whitesmoke;
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
