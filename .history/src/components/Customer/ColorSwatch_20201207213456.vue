<template>
  <v-row class="d-flex text-start pt-10">
    <v-col>
      <span class="admin">Please choose your color:</span>
      <span>{{col.name}}</span>
      <v-row class="d-flex justify-space-around pt-4">
        <v-btn
          v-for="(col, i) in this.colors"
          :key="i"
          :value="col.name"
          v-bind:color="col.name"
          depressed
          @click="changeIcon(col.id,col.name)"
        >
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
    changeIcon(index) {
      this.show = !this.show;
      console.log(this.show);
      console.log(index);
    },
      checkFalse: function(colors) {
      for (var i = 0; i < colors.length; i++) {
        colors[i].show = false;
      }
      console.log(this.colors)
    },
    checkTrue: function(col) {
      col.show = true;
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
