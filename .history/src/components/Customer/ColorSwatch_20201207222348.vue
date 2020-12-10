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
          @click="getColor(col.id);checkFalse();checkTrue(col)"
        >
           <v-icon color="white" v-show=col[i].show>mdi-check</v-icon>
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
    return {};
  },
  methods: {
    getColor(index) {
      this.$emit("sendColor", index);
    },
    checkFalse: function() {
      for (var i = 0; i < this.colors.length; i++) {
        this.colors[i].show = false;
      }
      console.log(this.colors);
    },
    checkTrue: function(col) {
      col.show = true;
      console.log(col.name)
    },
  },
  created() {
    this.$store.dispatch("getColorsOfOneProduct", this.productID);
    this.colors.map(function(e) {
      e.show = false;
    });
  },
  computed: {
    colors() {
      return this.$store.getters.colorsOfOneProduct;
    },
  },
};
</script>

<style></style>
