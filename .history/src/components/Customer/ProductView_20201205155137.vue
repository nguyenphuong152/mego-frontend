<template>
  <v-row>
    <v-col
      v-for="product in listProductInfos"
      :key="product.id"
      class="d-flex child-flex"
      cols="4"
    >
      <v-card
        class="mx-autoS"
        max-width="300"
        max-height="400"
        outlined
        @click="goDetail(product, product.product.id)"
      >
        <v-img
          :src="`https://picsum.photos/500/300?image=${product.id * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${product.id * 5 + 10}`"
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
        <v-row>
          <v-col class="pl-10">
            <v-row>
              <span class="product-name float-left"> {{ product.name }}</span>
            </v-row>
            <v-row>
              <span class="product-price">{{ product.price }}</span>
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
  data: () => ({
    return: {
      listProductInfos: []
    }
  }),
  methods: {
    goDetail: function (product, id) {
      this.$router.push({ name: "ProductDetail", params: { product, id } });
    },
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    productLowestPrice() {
      return this.$store.state.listProductswithLowestPrice;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("findLowestPrice", this.products);

     let productList = this.products;
    let productListInfo = this.productLowestPrice;

    for(var i=0;i<productList.length;i++)
    {
      this.listProductInfos.push(productList[i].name,productList[i].id,productListInfo[i].price);
    }
  },
};
</script>

<style></style>
