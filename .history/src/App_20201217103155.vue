<template>
  <v-app id="app">
    <v-container
      v-if="
        ![
          'Admin',
          'Banner',
          'Category',
          'Product',
          'ManageUser',
          'OrderList',
          'Dashboard',
          'AdminLogin',
          'AdminRegister',
          'ProductDetailAdmin',
        ].includes($route.name)
      "
    >
      <Toolbar class="hidden-xs-only" />
    </v-container>
    <v-main>
      <router-view></router-view>
    </v-main>

    <Footer
      v-if="
        ![
          'Admin',
          'Banner',
          'Category',
          'Product',
          'ManageUser',
          'OrderList',
          'Dashboard',
          'AdminLogin',
          'AdminRegister',
          'ProductDetailAdmin',
        ].includes($route.name)
      "
    />
  </v-app>
</template>

<script>
import Footer from "./components/Customer/Footer";
import Toolbar from "./components/Customer/Toolbar";

export default {
  name: "App",

  components: {
    Toolbar,
    Footer,
  },

  watch: {
    $route(to) {
      document.title = `${to.meta.title}`;
    },
  },
};
</script>
