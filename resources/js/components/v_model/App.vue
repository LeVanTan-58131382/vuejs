<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-size-2">Using Vue's v-model with complex objects</h1>
      <div v-for="(item, i) in holidays" :key="i">
        <h2 class="is-size-4">{{item.name}}</h2>
        <Child v-model="holidays[i]"/>
      </div>
      {{JSON.stringify(holidays)}}
    </div>
  </section>
</template>

<script>
import Child from "./components/Child";

export default {
  name: "AppVModel",
  components: {
    Child
  },
  data() {
    return {
      holidays: [
        {
          name: "Fourth Of July",
          date: null,
          description: ""
        },
        {
          name: "Thanksgiving",
          date: null,
          description: ""
        }
      ]
    };
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
