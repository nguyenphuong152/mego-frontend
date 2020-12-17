<template>
<<<<<<< HEAD
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
          }).format(this.product.product_detail_min_price.price)
        }}</span
      >
=======
  <v-container>
    <v-container>
        <v-row>
          <v-col cols="1" sm="10" md="5">
            <v-text-field label="ID" placeholder="1" clearable>
                
            </v-text-field>
          </v-col>
          <v-col cols="1" sm="10" md="5">
            <v-text-field
              label="Name"
              placeholder="tên"
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1" sm="10" md="5">
            <v-text-field
              label="Price"
              placeholder="1 tỉ"
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="1" sm="10" md="5">
            <v-text-field
              label="Color"
              placeholder="blue"
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1" sm="10" md="5">
            <v-text-field
              label="Size"
              placeholder="43"
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="1" sm="10" md="5">
            <v-text-field
              label="Model"
              placeholder="Spring"
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1" sm="1" md="5">
            <v-text-field
              label="Brand"
              placeholder="Nike"
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
>>>>>>> main
    </v-container>
  </v-container>
</template>

<script>
export default {
<<<<<<< HEAD
  props: ["product", "price", "isHasPrice"],
  data() {
    return {
      p: "",
=======
  data() {
    return {
>>>>>>> main
    };
  },
  methods: {},
};
</script>

<style></style>
