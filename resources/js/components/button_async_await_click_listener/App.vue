<template>
  <div id="app">
    <h2 class="title is-2">Auto awaiting button</h2>
    <div class="m-b-l">
      <h4 class="title is-4">Auto awaiting promises button</h4>
      <div
        class="m-b-m"
      >Button automatically awaits promises passed to click handler and shows sucess or error state.</div>
      <div class="m-b-m">Click a few times to randomly cause it to fail or succeed.</div>
      <VButton @click.prevent="clickReturningPromise">Click me to randomly change state</VButton>
    </div>

    <div class="m-b-l">
      <h4 class="title is-4">Button without promise</h4>
      <div
        class="m-b-m"
      >This button has its loading state managed externally and does not await promises</div>
      <pre class="m-b-m">loading: {{ this.loading }}</pre>
      <VButton
        :loading="loading"
        class="is-medium"
        @click="clickWithoutPromise"
      >My loading state is passed as a prop</VButton>
    </div>

    <div class="m-b-l">
      <h4 class="title is-4">Using with Slots</h4>
      <div class="m-b-m">You can pass slots for error success or loading state</div>
      <div class="m-b-m">Click a few times to randomly cause it to fail or succeed.</div>
      <VButton @click="clickReturningPromise">
        I have slots!
        <span slot="success">Awesome! Data has been fetched</span>
        <span slot="error">Oops... Something went wrong there...</span>
      </VButton>
    </div>
  </div>
</template>

<script>
import VButton from "./components/VButton";
import { generateRandomPromise } from "./utils.js";

export default {
  name: "AppButtonAsyncAwaitClickListener",
  components: {
    VButton
  },
  data: () => ({
    loading: false
  }),
  methods: {
    // a normal promise returning action
    clickReturningPromise() {
      return generateRandomPromise();
    },
    // method not returning a promise, but managing an external loading state
    clickWithoutPromise() {
      this.loading = true;
      generateRandomPromise()
        .then(generateRandomPromise)
        .catch(error => {
          console.log("Error Handled");
        })
        .finally(() => {
          this.loading = false;
        });
    }
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

.m-b-m {
  margin-bottom: 1rem;
}
.m-b-l {
  margin-bottom: 4rem;
}
</style>
