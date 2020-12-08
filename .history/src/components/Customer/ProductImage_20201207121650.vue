<template>
  <v-img :src="`https://picsum.photos/500/300?image=${this.productID}`"
  :lazy-src="`https://picsum.photos/10/6?image=${this.productID}`"
  max-height="700" max-width="700"/>
</template>

<script>
export default {
  props: ["productID"],
  data() {
    return {};
  },
  created(){
    console.log("iamge"+this.productID)
  }
};
</script>

<style></style>
