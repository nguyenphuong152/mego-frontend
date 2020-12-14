<template>
  <v-app class="admin">
    <v-main>
      <h1 style="text-start">Chi tiết sản phẩm</h1>
        <div>
            <ProductDetail/>      
        </div>
    </v-main>
  </v-app>
</template> 

<script>

import ProductDetail from "../../components/Admin/ProductDetail";
export default {
  components: {
    ProductDetail
  },

  data() {

  },
};
</script>