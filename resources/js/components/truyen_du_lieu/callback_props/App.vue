<template>
  <div id="app">
    <label>
      Name:
      <input
        type="text"
        name="name"
        autoComplete="off"
        :value="value"
        :oninput.prop="handleInput"
      />
    </label>
    <p>
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'AppCallbackProps',
  data() {
    return {
      value: '',
    }
  },
  methods: {
    handleInput({ target }) {
      this.value = target.value
    },
  },
  computed: {
    message() {
      return this.value ? `My name is ${this.value}` : `A girl has no name`
    },
  },
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
