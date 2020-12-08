<template>
  <v-row class="d-flex text-start pt-10">
    <v-col>
      <span class="admin">Please choose your color:</span>
      <b-button variant="red">Hlo</b-button>
      <b-button color="red">Hlo</b-button>
    </v-col>
    <!-- <v-col>
     
    </v-col> -->
  </v-row>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  props: ["productID"],
  data() {
    return {};
  },
  methods: {},
  created() {
    this.$store.dispatch("getColorsOfOneProduct", this.productID);
  },
  computed: {
    colors() {
      return this.$store.getters.colorsOfOneProduct;
    },
  },
};
</script>

<style></style>
