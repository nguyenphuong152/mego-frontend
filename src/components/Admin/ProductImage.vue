<template>
  <v-container>
    <v-img
      :src="
        `https://mego-backend.herokuapp.com/api/image/product/${this.productID}`
      "
      lazy-src="https://picsum.photos/id/11/10/6"
      max-height="700"
      max-width="700"
    />
    <v-btn block color="teal" elevation="2">Edit</v-btn>
  </v-container>
</template>

<script>
export default {
  props: ["productID"],
  data() {
    return {};
  },
};
</script>

<style></style>
