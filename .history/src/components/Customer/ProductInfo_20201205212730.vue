<template>
  <v-container class="text-start pa-0">
    <v-container pa-0 v-if="product">
      <span class="product-detail--title">{{this.product.name}}</span>
      <br />
      <span class="product-detail--price">
        {{
          Intl.NumberFormat("en-EN", { maximumSignificantDigits: 3 }).format(
          this.product.product_detail.price
          )
        }}</span
      >
    </v-container>
  </v-container>
</template>

<script>


export default {
  props:['product'],
  data() {
    return {
    }
  },
  created(){
    console.log(this.product.name+" "+this.product.product_detail.price)
  }
};
</script>

<style></style>
