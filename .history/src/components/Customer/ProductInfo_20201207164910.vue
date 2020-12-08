<template>
  <v-container class="text-start pa-0">
    <v-container pa-0 v-if="product">
      <span class="product-detail--title">{{ this.product.name }}</span>
      <br />
      <span class="product-detail--price">
        {{
          Intl.NumberFormat("vn-VN", {
            style: "currency",
            currency: "VND",
          }).format(this.price)
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
      isHasPrice: false
    };
  },
  methods: {
    checkNull: function(price) {
       if(price===null)
       {
         this.isHasPrice = true;
       }
    }
  }
};
</script>

<style></style>
