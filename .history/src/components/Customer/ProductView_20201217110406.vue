<template>
  <v-row>
    <v-col
      v-for="product in filterList"
      :key="product.id"
      class="d-flex child-flex"
      xs="4"
      cols="12"
    >
      <v-card class="mx-autoS" max-width="300" max-height="400" outlined>
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
                  }).format(product.product_detail_min_price.price)
                }}
              </span>
            </v-row>
          </v-col>
          <v-col>
            <v-card-actions class="float-right">
              <v-btn icon>
                <HeartIcon class="logo"> </HeartIcon>
              </v-btn>
              <v-btn icon @click="addToCart(product)">
                <CartIcon class="logo"> </CartIcon>
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import CartIcon from "../../assets/shopping-cart.svg";
import HeartIcon from "../../assets/heart.svg";
export default {
  props: ["filter", "category", "brand", "tag"],
  components: {
    CartIcon,
    HeartIcon,
  },
  computed: {
    listProductWithPrice() {
      if (this.category === 11) {
        return this.$store.getters.listProductWithPrice;
      }
      return this.$store.getters.listProductFilter[0].products;
    },
    filterList() {
      return this.listProductWithPrice.filter((p) => {
        return p.name.toLowerCase().includes(this.filter.toLowerCase());
      });
    },
  },
  async created() {
    console.log(this.brand);
    if (this.category == 11) {
      await this.$store.dispatch("getListProductWithPrice");
    } else if (this.category != 11) {
      if (this.brand !== "" && this.tag !== "") {
        await this.$store.dispatch("getListProductFilter", {
          colID: this.category,
          brandID: this.brand,
          modelID: this.tag,
        });
      } else if (this.brand !== "" && this.tag == "") {
        await this.$store.dispatch("getListProductFilter", {
          colID: this.category,
          brandID: this.brand,
          modelID: "",
        });
      } else {
        await this.$store.dispatch("getListProductFilter", {
          colID: this.category,
          brandID: "",
          modelID: "",
        });
      }
    }
  },
  methods: {
    goDetail: function(product, id) {
      this.$router.push({ name: "ProductDetail", params: { id } });
    },
    addToCart(product) {
      this.$store.dispatch("addProductToCart", {
        product: product,
        quantity: Number(this.select),
        price: product.product_detail_min_price.price,
      });
    },
  },
};
</script>

<style></style>
