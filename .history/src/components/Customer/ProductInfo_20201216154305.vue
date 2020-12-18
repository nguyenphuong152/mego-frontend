<template>
  <v-container class="text-start pa-0">
    <v-container pa-0 v-if="product">
      <span class="product-detail--title">{{ this.product.product.name }}</span>
      <br />
      <span class="product-detail--price" v-if="this.isHasPrice">
        {{
          Intl.NumberFormat("vn-VN", {
            style: "currency",
            currency: "VND",
          }).format(this.price)
        }}</span
      >
      <span class="product-detail--price" v-else>
        {{
          Intl.NumberFormat("vn-VN", {
            style: "currency",
            currency: "VND",
          }).format(this.product.price)
        }}</span
      >
    </v-container>
  </v-container>
</template>

<script>
export default {
  props: ["id", "price", "isHasPrice"],
  data() {
    return {
      p: "",
      pid: "",
    };
  },
  computed: {
    getProduct() {
      return this.$store.getters.productWithPrice;
    },
  },
  created() {
    this.pid = this.$route.params.id;
    this.$store.dispatch("getProductWithPrice", this.pid);
  },
};
</script>

<style></style>
