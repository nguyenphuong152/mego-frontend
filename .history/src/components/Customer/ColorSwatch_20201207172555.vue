<template>
  <v-row class="d-flex text-start pt-10">
    <v-col>
      <span class="admin">Please choose your color:</span>
      <v-row class="d-flex justify-space-around pt-4">
        <v-btn-toggle
        v-model="text"
        tile
        group
         v-bind:style="{'background-color':col.name}"
        class="admin"
      >
        <v-btn
          v-for="(col, i) in this.colors"
          :key="i"
          :value="col.name"
          v-bind:style="{'background-color':col.name}"
        >
        {{col.name}}
        </v-btn>
      </v-btn-toggle>
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
      show:false,
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
    
  }
};
</script>

<style></style>
