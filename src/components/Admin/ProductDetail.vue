
<template>
  <v-main>
    <v-app class="admin">
      <v-row>
        <v-col cols="7"> 
          <product-image :productID="this.pid" /> 
        </v-col>
        <v-divider vertical></v-divider>
        <v-col >
          <div>
            <product-info :productDetail="this.getDetail" 
                          :productBrand="this.getBrand"
                          :productModel="this.getModel" />
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <ProductDescription/>
      </v-row>
      <div style="margin-left:955px;">
        <v-btn
         color="teal"
         style="width:90px"
         @click="UpdateProductDetail()">
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
      productBrandID:null,
      productModelID:null,
    }
  },
  computed:{
    getDetail:function() {
      return this.$store.state.productDetail_Admin;
    },
    getModel:function(){
      return this.$store.state.productModel_Admin;
    },
    getBrand:function() {
      return this.$store.state.productBrand_Admin;
    },  
  },
  methods:{
    UpdateProductDetail(){
    }
  },
  created:function(){
    this.pid = this.$route.params.id;
    this.$store.dispatch('getProductDetailByID',this.pid);
    this.$store.dispatch('getProductModelByID',this.pid);
    this.$store.dispatch('getProductBrandByID',this.pid);
  }
};
</script>
