<template>
  <div>
    <h1>Dự báo: <b>{{ forecast}}</b></h1>
    <p>Vào ngày {{day}} giá nước chanh là {{costOfLemonade}} xu mỗi cốc.</p>
    <p>Bạn hiện có {{ assets | money}} bằng tiền mặt.</p>
    <p>
      Bạn muốn pha bao nhiêu ly nước chanh? 
      <input
        type="number"
        v-model.number="numGlasses"
        min="0"
      >
    </p>
    <p>
      Bạn muốn làm bao nhiêu bảng hiệu quảng cáo ({{costOfSigns}} xu mỗi bảng hiệu)?
      <input
        type="number"
        v-model.number="numSigns"
        min="0"
      >
    </p>
    <p>
      Bạn muốn tính giá nước chanh (tính bằng xu) là bao nhiêu? 
      <input
        type="number"
        v-model.number="pricePerGlass"
        min="0"
      >
    </p>

    <div v-if="hasErrors">
      <strong>Ồ ồ! Hãy sửa những lỗi này! </strong>
      <ul>
        <li v-for="e in errors" :key="e">{{e}}</li>
      </ul>
    </div>
    <br>
    <button @click="initiateSales">Bắt đầu bán!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numGlasses: 0,
      numSigns: 0,
      pricePerGlass: 0
    };
  },
  created() {
    console.log('created');
    this.$store.commit("generateForecast");
  },
  computed: {
    assets() {
      return this.$store.state.assets / 100;
    },
    day() {
      return this.$store.state.day;
    },
    costOfLemonade() {
      return this.$store.getters.costOfLemonade;
    },
    costOfSigns() {
      return this.$store.state.signCost;
    },
    errors() {
      return this.$store.state.errors;
    },
    forecast() {
      return this.$store.getters.forecast;
    },
    hasErrors() {
      return this.$store.getters.hasErrors;
    }
  },
  methods: {
    initiateSales() {
      // try to sell - note we pass the getter value cuz Mutations can't use Getters (weird!)
      this.$store.commit("doSales", {
        glasses: this.numGlasses,
        signs: this.numSigns,
        cost: this.pricePerGlass,
        costOfLemonade: this.costOfLemonade
      });
      if(!this.hasErrors) this.$router.replace("/report");
    }
  }
};
</script>

<style scoped>
    p{
        text-align: left
    }
</style>
