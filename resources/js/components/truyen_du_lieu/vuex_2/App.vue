<template>
  <div id="app">
    <UserDisplay/>
    <b>-------------------------------------------------</b>
    <ProductDisplay/>
    <b>-------------------------------------------------</b>
  </div>
</template>

<script>
import UserDisplay from "./components/UserDisplay.vue";
import ProductDisplay from "./components/ProductDisplay.vue";

export default {
  name: "AppVuex2",
  components: {
    UserDisplay,
    ProductDisplay,
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