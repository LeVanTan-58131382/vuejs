<template>
  <li>
    {{ todo.text }}
    <button @click="$emit('remove', todo.id)">
      X
    </button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
    li{
        border: 1px solid #32485F;
        border-radius: 3px;
        padding: 5px;
        margin: 5px;
    }
    button{
        float: right;
    }
</style>