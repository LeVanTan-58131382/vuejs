<template>
  <div id="app">
    <NumberDisplay/>
    <NumberSubmit/>
  </div>
</template>

<script>
import NumberDisplay from "./NumberDisplay.vue";
import NumberSubmit from "./NumberSubmit.vue";

export default {
  name: "App",
  components: {
    NumberDisplay,
    NumberSubmit
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
