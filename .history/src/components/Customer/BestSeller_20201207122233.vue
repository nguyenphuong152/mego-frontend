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
          :src="`https://picsum.photos/500/300?image=${product.id * 100}`"
          :lazy-src="`https://picsum.photos/10/6?image=${product.id * 100}`"
          aspect-ratio="1"
          class="grey lighten-2"
          height="200"
           @click="goDetail(product, product.id)"
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
        <v-row>
          <v-col class="pl-10">
            <v-row>
              <span class="product-name float-left"> {{ product.name }}</span>
            </v-row>
            <v-row>
              <span class="product-price">
                {{
                  Intl.NumberFormat("vn-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(5000000)
                }}
              </span>
            </v-row>
          </v-col>
          <v-col>
            <v-card-actions class="float-right">
              <v-btn icon color="grey">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon color="grey">
                <v-icon>mdi-cart</v-icon>
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
          
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default {
  components: {
   
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  methods:{
    goDetail: function ( product,id) {
      this.$router.push({ name: "ProductDetail", params: {  id } });
      this.$store.dispatch("getProductWithPrice",product);
    }
  }
};
</script>

<style></style>
