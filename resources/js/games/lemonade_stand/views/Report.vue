<template>
  <div>
    <h1>Báo cáo tài chính hàng ngày </h1>

    <p v-if="message">
      <strong>{{message}}</strong>
    </p>

    <p>Vào ngày {{day}}, bạn đã bán được {{glassesSold}} ly nước chanh.</p>

    <p>
      Bạn đã kiếm được {{income | money}} và có chi phí {{expenses | money}}
       để có lợi nhuận ròng là {{profit | money }}. 
    </p>

    <p>Bạn hiện tại có {{ assets | money }}.</p>

    <router-link to="/game" tag="button">Ngày tiếp theo</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    // we update our assets now, nto before, so i don't have to worry about the
    // display changing for a spli second. could be better?
    this.$store.commit("updateAssets");
  },
  computed: {
    assets() {
      return this.$store.state.assets / 100;
    },
    day() {
      return this.$store.state.day;
    },
    glassesSold() {
      return this.$store.state.glassesSold;
    },
    income() {
      return this.$store.state.income / 100;
    },
    expenses() {
      return this.$store.state.expenses / 100;
    },
    profit() {
      return this.income - this.expenses;
    },
    message() {
      return this.$store.state.message;
    }
  },
  methods: {}
};
</script>

<style scoped>

</style>
