<template>
  <v-app app>
    <div id="fb-root"></div>
    <script>
      window.fbAsyncInit = function() {
        FB.init({
          xfbml: true,
          version: "v9.0",
        });
      };

      (function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    </script>

    <!-- Your Chat Plugin code -->
    <div
      class="fb-customerchat"
      attribution="install_email"
      page_id="105583464763139"
      theme_color="#44bec7"
      logged_in_greeting="Ch&#xe0;o b&#x1ea1;n, Mego c&#xf3; th&#x1ec3; gi&#xfa;p g&#xec; cho b&#x1ea1;n?"
      logged_out_greeting="Ch&#xe0;o b&#x1ea1;n, Mego c&#xf3; th&#x1ec3; gi&#xfa;p g&#xec; cho b&#x1ea1;n?"
    ></div>
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
        ].includes($route.name)
      "
    >
      <Toolbar />
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
};
</script>
