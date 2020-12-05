<template>
  <v-container class="text-start pa-0">
    <v-container pa-0 v-if="product">
      <span class="product-detail--title">{{this.productName}}</span>
      <br />
      <span class="product-detail--price">
        {{
          Intl.NumberFormat("en-EN", { maximumSignificantDigits: 3 }).format(
          this.productPrice
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
