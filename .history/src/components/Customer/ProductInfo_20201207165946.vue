<template>
  <v-container class="text-start pa-0">
    <v-container pa-0 v-if="product">
      <span class="product-detail--title">{{ this.product.name }}</span>
      <br />
      <span class="product-detail--price" v-if="isHasPrice">
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
  props: ["product","price"],
  data() {
    return {
      isHasPrice: true,
      p:'',
    };
  },
  methods: {
    checkNull: function(price) {
       if(price==='')
       {
         this.isHasPrice = false;
       }
    }
  },
  watch: {
     p() {
        console.log(this.p)
     }
  },
  created() {
    this.checkNull(this.price);
    this.p = this.price
  }
};
</script>

<style></style>
