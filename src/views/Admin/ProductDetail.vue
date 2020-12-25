<template>
  <v-app>
      <v-row>
        <v-btn color="white"
         class="ma-2 white--text admin;text-start"
         @click="backToProductPage()">
        <v-icon color="black"> mdi-arrow-left </v-icon>
      </v-btn>

      <h1 style="margin-left:355px;">Chi tiết sản phẩm</h1>
      </v-row>    
      <div>
        <ProductDetail/>
      </div>
  </v-app>
</template> 

<script>
import ProductDetail from "../../components/Admin/ProductDetail";
export default {
  data:() =>({
    
  }),
  components: {
    ProductDetail,
  },
  methods: {
    backToProductPage() {
      const path = '/admin/product';
      if (this.$route.path !== path) this.$router.push(path)
    },

  },

};
</script>