<template>
  <v-toolbar flat>
    <v-row class="d-flex align-baseline">
      <v-col cols="3" class="d-flex justify-lg-start ">
        <v-toolbar-title id="logo">MEGO</v-toolbar-title>
      </v-col>
      <v-col class="d-flex justify-space-around text-start nav">
        <router-link to="/">Home</router-link>
        <router-link to="/men">Men</router-link>
        <router-link to="/women">Women</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </v-col>
      <v-col cols="2" class="d-flex justify-end hidden-sm-only">
        <v-btn icon>
          <SearchIcon class="logo"></SearchIcon>
        </v-btn>
        <v-menu
          open-on-hover
          top
          offset-y
          :position-x="1000"
          :position-y="230"
          absolute
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <UserIcon class="logo"></UserIcon>
            </v-btn>
          </template>

          <v-list class="text-start nav">
            <v-list-item
              v-for="(item, index) in routes"
              :key="index"
              :to="item.path"
            >
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-divider vertical inset></v-divider>
        <v-badge
          :content="cartItemCount"
          :value="cartItemCount"
          color="cyan"
          overlap
          bottom
          class="admin"
        >
          <v-btn icon @click="goToCart">
            <CartIcon class="logo"> </CartIcon>
          </v-btn>
        </v-badge>
      </v-col>
    </v-row>
  </v-toolbar>
</template>

<script>
import CartIcon from "../../assets/shopping-cart.svg";
import UserIcon from "../../assets/user.svg";
import SearchIcon from "../../assets/search.svg";

export default {
  components: {
    CartIcon,
    UserIcon,
    SearchIcon,
  },
  data: () => ({
    routes: [
      {
        path: "/checkout",
        name: "Check Out",
      },
      {
        path: "/account",
        name: "My Account",
      },
      {
        path: "/userlogin",
        name: "User Login",
      },
    ],
  }),
  methods: {
    goToCart: function() {
      this.$router.push({ name: "Cart" });
    },
  },
  computed: {
    // cart(){
    //   return this.$store.state.cart;
    // }
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
  },
};
</script>

<style></style>
