<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import axios from 'axios';

function randInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default {
  name: 'HelloWorld',
  props: {
    delay: {
      default: 3
    }
  },
  data() {
    return {
      msg: ''
    };
  },
  mounted() {
    axios.get(`https://reqres.in/api/users?delay=${this.delay}`)
         .then(resp => resp.data.data)
         .then(users => {
           const i = randInt(users.length);
           this.msg = users[i].first_name
         })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
