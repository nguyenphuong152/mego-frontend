<template>
  <v-row>
    <v-col
      v-for="product in filterList"
      :key="product.id"
      class="d-flex child-flex"
      xs="12"
      md="4"
      cols="12"
    >
      <v-card class="mx-autoS" width="300" height="300" outlined>
        <v-img
          v-if="
            product.product_detail_min_price.id <= 15
              ? (x = product.product_detail_min_price.id)
              : (x = Math.floor(Math.random() * 15) + 1)
          "
          :src="`https://mego-backend.herokuapp.com/api/image/product/${x} `"
          :lazy-src="
            `https://mego-backend.herokuapp.com/api/image/product/${x}`
          "
          aspect-ratio="1"
          class="grey lighten-2"
          height="200"
          @click="goDetail(product.product_detail_min_price.id)"
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
  data() {
    return {
      x: "",
    };
  },
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
      console.log(this.listProductWithPrice);
      return this.listProductWithPrice.filter((p) => {
        return p.name.toLowerCase().includes(this.filter.toLowerCase());
      });
    },
  },
  async created() {
    if (this.category == 11 && this.brand == "" && this.category == "") {
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
    goDetail: function(id) {
      this.$router.push({ name: "ProductDetail", params: { id } });
    },
    addToCart(product) {
      this.$store.dispatch("addProductToCart", {
        product: product,
        quantity: Number(1),
        price: product.product_detail_min_price.price,
      });
    },
  },
};
</script>

<style></style>
