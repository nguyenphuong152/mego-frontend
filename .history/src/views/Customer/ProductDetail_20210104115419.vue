<template>
  <div class="app">
    <v-sheet color="grey lighten-3" height="150">
      <v-container py-8>
        <a class="title-normal">Product Detail</a>
        <br />
        <br />
        <a class="title-shoes">Home / Product Detail</a>
      </v-container>
    </v-sheet>
    <v-container>
      <v-row>
        <v-col cols="12" md="7">
          <imageView :productID="this.pid" />
        </v-col>
        <v-divider vertical></v-divider>
        <v-col class="text-start">
          <span class="product-detail--title">{{
            this.getProduct.product.name
          }}</span>
          <br />
          <span class="product-detail--price" v-if="!isHasSize">
            {{
              Intl.NumberFormat("vn-VN", {
                style: "currency",
                currency: "VND",
              }).format(this.getProduct.price)
            }}
          </span>
          <span class="product-detail--price" v-else-if="this.price == 0">
            Sold out!
          </span>
          <span class="product-detail--price" v-else>
            {{
              Intl.NumberFormat("vn-VN", {
                style: "currency",
                currency: "VND",
              }).format(this.price)
            }}</span
          >
          <colorSwatch :productID="this.pid" @sendColor="sendColor" />
          <size
            :productID="this.pid"
            @sendPrice="sendPrice"
            @sendSize="sendSize"
            :colorID="this.color"
          />
          <v-row class="d-flex align-baseline">
            <v-col class="text-start">
              <span class="admin">Rate this product:</span>
            </v-col>
            <v-col class="d-flex">
              <v-rating
                v-model="rating"
                background-color="black"
                color="yellow accent-4"
                dense
                half-increments
                hover
                size="22"
              ></v-rating>
              <span> ({{ rating }}) </span>
            </v-col>
          </v-row>
          <v-row class="d-flex align-baseline">
            <v-col cols="3">
              <span class="admin">Quantity:</span>
            </v-col>
            <v-col cols="3">
              <v-combobox v-model="select" :items="items" outlined></v-combobox>
            </v-col>
            <v-col cols="3" class="align-end">
              <v-btn
                color="teal"
                class="ma-2 white--text admin"
                @click="addToCart(getProduct)"
              >
                Add to cart
                <v-icon right dark> mdi-cart </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-divider></v-divider>
      <productDiscription :content="getProduct.product.description" />
    </v-container>
  </div>
</template>

<script>
import imageView from "../../components/Customer/ProductImage";
import colorSwatch from "../../components/Customer/ColorSwatch";
import size from "../../components/Customer/Size";
import productDiscription from "../../components/Customer/ProductDiscription";

export default {
  components: { imageView, colorSwatch, size, productDiscription },
  data() {
    return {
      pid: "",
      color: "",
      rating: 5,
      select: "1",
      items: ["1"],
      price: "",
      isHasSize: false,
    };
  },
  computed: {
    getProduct() {
      return this.$store.getters.productWithPrice;
    },
  },
  methods: {
    addToCart(product) {
      let price;
      if (this.price === 0) {
        price = product.product_detail.price;
      } else {
        price = this.price;
      }
      this.$store.dispatch("addProductToCart", {
        product: product,
        quantity: Number(this.select),
        price: price,
      });
    },
    sendPrice(price) {
      console.log("price detail: " + price);
      this.price = price;
    },
    sendColor(colorID) {
      if (colorID != "") {
        this.color = colorID;
      }
    },
    sendSize(size) {
      if (size != null) {
        this.isHasSize = true;
      } else {
        this.isHasSize = false;
      }
    },
  },
  created() {
    this.pid = this.$route.params.id;
    this.$store.dispatch("getProductWithPrice", this.pid);
    this.color = 1;
    this.size = 1;
  },
};
</script>

<style></style>
