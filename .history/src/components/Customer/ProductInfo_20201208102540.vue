<template>
  <v-container class="text-start pa-0">
    <v-container pa-0 v-if="product">
      <span class="product-detail--title">{{ this.product.name }}</span>
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
          }).format(this.product.product_detail.price)
        }}</span
      >

    </v-container>
  </v-container>
</template>

<script>
export default {
  props: ["product","price","isHasPrice"],
  data() {
    return {
      p:''
    };
  },
  methods: {
    checkPrice(price)
    {
      if (typeof price === 'undefined') {
        console.log('hi')
        this.p='SOLD OUT'
      }else
      {
        this.p = price;
      }

    }
  },
  created() {
    this.checkPrice(this.price);
  }
  
};
</script>

<style></style>
