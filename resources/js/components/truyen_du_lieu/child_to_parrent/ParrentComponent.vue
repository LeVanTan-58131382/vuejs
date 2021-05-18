<template>
  <div id="app" title="Component cha" style="background-color:blue; padding: 15px">
    <ChildComponent @inputData="updateMessage"/>
    <h3>{{message}}</h3>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  name: 'App',
  components: {
    ChildComponent
  },
  data() {
    return {
        message: 'Message default.'
    }
  },
  methods: {
    updateMessage(mes) {
        this.message = mes;
    }
  }
}
</script>