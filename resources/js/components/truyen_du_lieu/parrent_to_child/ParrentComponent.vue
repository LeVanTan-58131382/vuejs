<template>
  <div id="app" title="Component cha" style="background-color:blue; padding: 15px">
    <ChildComponent msg="Welcome to Your Vue.js App ( Truyền dữ liệu từ cha sang con dùng Props)"/>
    <!-- //OR <ComponentFirst :msg="Welcome to Your Vue.js App">
    //OR <ComponentFirst v-bind:msg="Welcome to Your Vue.js App"></ComponentFirst> -->
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  name: 'App',
  components: {
    ChildComponent
  }
}
</script>