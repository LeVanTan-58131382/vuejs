<template>
  <div>
    <h1>This is Detail Page!!</h1>
    <ul>
      <li class="detail-item" v-for="l in list" :key="l.id" @click="move(l.id)">
        <span>{{l.id}} {{l.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: "001", name: "AAAA" },
        { id: "002", name: "BBBB" },
        { id: "003", name: "CCCC" },
        { id: "004", name: "DDDD" },
        { id: "005", name: "EEEE" }
      ]
    };
  },
  methods: {
    move(id) {
      this.$router.push(`/detail/${id}`);
    }
  }
};
</script>

<style scoped>
.detail-item {
  cursor: pointer;
  line-height: 40px;
}
.detail-item > span {
  text-decoration: underline;
}
.detail-item > span:hover {
  opacity: 0.8;
}
</style>
