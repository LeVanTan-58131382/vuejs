<template>
  <div id="app">
    <ParentComponent/>
  </div>
</template>

<script>
import ParentComponent from "./components/ParentComponent";

export default {
  name: "AppEventSample_1",
  components: {
    ParentComponent
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
