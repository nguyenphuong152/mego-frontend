<template>
  <v-row class="d-flex text-start pt-10">
    <v-col>
      <span class="admin">Please choose your color:</span>
      <v-row class="d-flex justify-space-around pt-4">
        <v-btn
          v-for="(col, i) in this.colors"
          :key="i"
          :value="col.name"
          v-bind:color="col.name"
          depressed
          @click="changeIcon()"
        >
          <v-icon color="white" v-show="this.show" >
           mdi-check
          </v-icon>
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
      show: false
    };
  },
  methods: {
    changeIcon()
    {
      this.show = !this.show;
    }
  },
  created() {
    this.$store.dispatch("getColorsOfOneProduct", this.productID);
  },
  computed: {
    colors() {
      return this.$store.getters.colorsOfOneProduct;
    },
  },
   watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]
      },
    },
};
</script>

<style></style>
