<template>
  <v-container class="text-start pa-0">
    <v-container pa-0 v-if="product">
      <span class="product-detail--title">{{product.name}}</span>
      <br />
      <span class="product-detail--price">
        {{
          Intl.NumberFormat("en-EN", { maximumSignificantDigits: 3 }).format(
          productDetail.price
          )
        }}</span
      >
    </v-container>
  </v-container>
</template>

<script>


export default {
  props:['productId'],
  data() {
    return {
    }
  },
   computed: {
    product() {
      return this.$store.state.product;
    },
    productDetail() {
      return this.$store.state.productDetail;
    }
  },
  mounted() {
    this.$store.dispatch('getProduct', this.productId);
    this.$store.dispatch('getProductDetail', this.productId);
  }
  
};
</script>

<style></style>
