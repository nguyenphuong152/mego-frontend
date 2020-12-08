<template>
  <v-row class="d-flex text-start pt-10">
    <v-col>
      <span class="admin">Please choose your color:</span>
      <v-row class="d-flex justify-space-around pt-4">
        <v-btn
          v-for="(col, i) in this.colors"
          :key="i"
          :value="col.name"
          color="col.name"
          tile
          dense
        >
          {{ col.name }}
        </v-btn>
      </v-row>
    </v-col>
    <!-- <v-col>
     
    </v-col> -->
  </v-row>
</template>

<script>
export default {
  props: ["productID"],
  data() {
    return {
    };
  },
  methods: {
  },
  created() {
    this.$store.dispatch("getColorsOfOneProduct", this.productID);
  },
  computed: {
    colors() {
      return this.$store.getters.colorsOfOneProduct;
    },
  },
  watch: {},
};
</script>

<style></style>
