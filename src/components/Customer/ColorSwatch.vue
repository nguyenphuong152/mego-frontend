<template>
  <v-row class="d-flex text-start pt-10">
    <v-col>
      <span class="admin">Please choose your color:</span>
      <br />
      <span class="admin grey--text"
        ><span class="red--text">*</span>
        Select both color and price to get price of product
      </span>

      <v-row class="d-flex justify-space-around pt-4">
        <v-btn
          v-for="(col, i) in this.colors"
          :key="i"
          :value="col.name"
          v-bind:color="col.name"
          depressed
          @click="getColor(col)"
        >
          <v-icon color="white" v-show="clicking == col.id">mdi-check</v-icon>
        </v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["productID"],
  data() {
    return {
      clicking: "1",
    };
  },
  methods: {
    getColor(col) {
      this.$emit("sendColor", col.id);
      this.clicking = col.id;
    },
  },
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
