<template>
  <v-row class="d-flex text-start pt-10">
    <v-col>
      <span class="admin">Please choose your color:</span>
      <v-row class="d-flex justify-space-around pt-4">
        <v-sheet
          v-for="(col, i) in this.colors"
          :key="i"
          v-bind="{ color: col.name }"
          height="36"
          width="36"
          shaped
          @click="
            checkFalse();
            checkTrue(col);
          "
        >
          <v-icon color="white" v-show="col.show">mdi-check</v-icon>
        </v-sheet>
      </v-row>
    </v-col>
    <!-- <v-col>
     
    </v-col> -->
  </v-row>
</template>

<script>
import Vue from 'vue'

export default {
  props: ["productID"],
  data() {
    return {
      text: "",
    };
  },
  methods: {
    checkFalse: function() {
      for (var i = 0; i < this.colors.length; i++) {
        this.colors[i].show = false;
      }
      console.log(this.colors)
    },
    checkTrue: function(col) {
      col.show = true;
    },
  },
  created() {
    console.log(this.productID);
    this.$store.dispatch("getColorsOfOneProduct", this.productID);
    this.colors.map(function(e){
     e.show = false;
});
  },
  computed: {
    colors() {
      return this.$store.getters.colorsOfOneProduct;
    },
  },
  watch: {
     checkFalse: function() {
      for (var i = 0; i < this.colors.length; i++) {
        Vue.set(this.colors[i].show , false)
      }
      console.log(this.colors)
    },
    checkTrue: function(col) {
      Vue.set(col.show ,true);
    },
  }
};
</script>

<style></style>
