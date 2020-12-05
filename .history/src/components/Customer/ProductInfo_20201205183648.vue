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
  props:['productName','productPrice'],
  data() {
    return {
    }
  },
};
</script>

<style></style>
