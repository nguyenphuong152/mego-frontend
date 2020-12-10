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
          <v-icon color="white" v-show="this.clicked.indexOf(col.id) !== -1"
            >mdi-check</v-icon
          >
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
      listColor: [],
      clicked: [],
    };
  },
  methods: {
    getColor(col) {
      this.$emit("sendColor", col.id);
      for (var i = this.clicked.length - 1; i >= 0; i--) {
        if (this.clicked[i].id !== col.id) {
          this.clicked.splice(i, 1);
        }
      }
    },
  },
  created() {
    this.$store.dispatch("getColorsOfOneProduct", this.productID);
    var i = -1;

    while (++i < this.colors.length) {
      this.clicked[i] = this.colors[i];
    }
    console.log(this.clicked);
  },
  computed: {
    colors() {
      return this.$store.getters.colorsOfOneProduct;
    },
  },
};
</script>

<style></style>
