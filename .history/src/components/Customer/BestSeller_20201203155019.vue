<template>
  <v-row class="mt-8">
    <v-col
      class="d-flex child-flex"
      cols="4"
      v-for="(product, index) in products"
      :key="index"
    >
      <v-card class="mx-auto" max-width="300" max-height="400" outlined>
        <v-img
          :src="`https://picsum.photos/500/300?image=${index * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${index * 5 + 10}`"
          aspect-ratio="1"
          class="grey lighten-2"
          height="200"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-linear
                indeterminate
                color="yellow darken-2"
              ></v-progress-linear>
            </v-row>
          </template>
        </v-img>
        <v-row class="d-flex align-center justify-space-around">
          <v-col cols="8" >
            <span class="title-shoes"
              >{{ product.name }}
            </span>
          </v-col>

          <v-col class="pa-0">
            <v-row class="text-start">
              <v-col>
    <IconSale class="icon"></IconSale>
              </v-col>
          <v-col>
   <IconBag class="icon"></IconBag>
          </v-col>
           
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import IconBag from "../../assets/bascket.svg";
import IconSale from "../../assets/discount.svg";

export default {
  components: {
    IconBag,
    IconSale,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style></style>
