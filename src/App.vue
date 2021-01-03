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
          'UserDetailAdmin',
          'AddProductAdmin',
          'OrderDetail',
          'UserDetail',
        ].includes($route.name)
      "
    >
      <Toolbar class="hidden-xs-only" />
      <div class="hidden-sm-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-row class="d-flex align-baseline justify-space-around">
              <v-col class="pa-0 text-start" cols="10">
                <span>MEGO</span>
              </v-col>
              <v-col class="pa-0">
                <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
              </v-col>
            </v-row>
          </template>
          <v-list>
            <v-list-item class="nav">
              <v-list-item-title
                ><router-link to="/">Home</router-link></v-list-item-title
              >
            </v-list-item>
            <v-list-item class="nav">
              <v-list-item-title
                ><router-link to="/men">Men</router-link></v-list-item-title
              >
            </v-list-item>
            <v-list-item class="nav">
              <v-list-item-title
                ><router-link to="/women">Women</router-link></v-list-item-title
              >
            </v-list-item>
            <v-list-item class="nav">
              <v-list-item-title
                ><router-link to="/userlogin"
                  >Login</router-link
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item class="nav">
              <v-list-item-title
                ><router-link to="/cart">Cart</router-link></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
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
          'UserDetailAdmin',
          'AddProductAdmin',
          'OrderDetail',
          'UserDetail',
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

  data: () => ({
    //
  }),

  watch: {
    $route(to) {
      document.title = `${to.meta.title}`;
    },
  },
};
</script>
