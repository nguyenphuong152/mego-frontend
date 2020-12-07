<template>
  <v-img :src="`https://picsum.photos/500/300?image=${this.productID * 8 + 20}`"
  :lazy-src="`https://picsum.photos/10/6?image=${this.productID * 8 + 20}`"
  max-height="700" max-width="700">
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
