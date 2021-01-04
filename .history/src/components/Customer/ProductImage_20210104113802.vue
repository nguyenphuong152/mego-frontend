<template>
  <v-img
    :src="
      `https://mego-backend.herokuapp.com/api/image/product/${this.productID}`
    "
    :lazy-src="
      `https://mego-backend.herokuapp.com/api/image/product/${this.productID}`
    "
    height="400"
    max-width="700"
  />
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
