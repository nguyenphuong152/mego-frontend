<template>
<v-form ref="form">
  <v-container>
    <v-container>
        <v-row>
          <v-col cols="1" sm="10" md="5">
            <v-text-field 
              label="ID" 
              v-model="this.productDetail.id" 
              clearable>
            </v-text-field>
          </v-col>
          <v-col cols="1" sm="10" md="5">
            <v-text-field 
              label="Name" 
              v-model="this.productDetail.product.name" 
              clearable>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1" sm="10" md="5">
            <v-text-field 
              label="price" 
              id="price"
              v-model="this.productDetail.price" 
              clearable>
            </v-text-field>
          </v-col>
          <v-col cols="1" sm="10" md="5">
            <v-text-field 
              label="Color" 
              v-model="this.productDetail.color.name" 
              clearable>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1" sm="10" md="5">
            <v-text-field 
              label="Size"
              v-model="this.productDetail.size.name" 
              clearable>
            </v-text-field>
          </v-col>
          <v-col cols="1" sm="10" md="5">
            <v-text-field
              label="Collection"
              placeholder="Spring"
              clearable>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1" sm="1" md="5">
            <v-text-field
              label="Brand"
              v-model="this.productBrand.name" 
              clearable>
            </v-text-field>
          </v-col>
            <v-col cols="1" sm="1" md="5">
            <v-text-field
              label="Model"
              v-model="this.productModel.name" 
              clearable>
            </v-text-field>
          </v-col>
        </v-row>
    </v-container>
  </v-container>
  </v-form>
</template>

<script>
export default {
  props:["productDetail",
        "productBrand",
        "productModel"],
  data() {
    return{
      price:'',
    }
  },
  methods:{
    UpdateProductDetail:function(){
      console.log("Info: ",this.productDetail.price);
    }
  },
};
</script>

<style></style>
