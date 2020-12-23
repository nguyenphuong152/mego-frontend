
<template>
  <v-main>
    <v-app class="admin">
      <v-row>
        <v-col cols="7"> 
          <product-image :productID="this.pid" /> 
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
          <product-info :productDetail="this.productDetail" />
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <ProductDescription/>
      </v-row>
      <div style="margin-left:955px;">
        <v-btn color="teal" style="width:90px">
          Save
        </v-btn>
      </div>
    </v-app>
  </v-main>
</template>

<script>

import ProductImage from "../../components/Admin/ProductImage";
import ProductDescription from "../../components/Admin/ProductDescription";
import ProductInfo from "../../components/Admin/ProductInfo";


export default {
  components: { ProductImage,ProductDescription,ProductInfo },
  data(){
    return{
      pid: "",
      productDetail:null,
    }
  },
  created:function(){
    this.pid = this.$route.params.id;
    this.productDetail = this.$store.state.productDetail_Admin;
  }
};
</script>
