<template>
  <v-container>
    <v-app class="admin">
      <v-row>
        <v-col cols="7"> 
          <product-image :productID="this.pid" /> 
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
          <v-row>
            <v-col cols="1" sm="10" md="5">
              <v-text-field
                label="ID"
                placeholder=1
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="1" sm="10" md="5">
              <v-text-field
                label="Name"
                placeholder=tên
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="1" sm="10" md="5">
              <v-text-field
                label="Price"
                placeholder="1 tỉ"
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="1" sm="10" md="5">
              <v-text-field
                label="Color"
                placeholder=blue
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="1" sm="10" md="5">
              <v-text-field
                label="Size"
                placeholder=43
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="1" sm="10" md="5">
              <v-text-field
                label="Model"
                placeholder=Spring
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="1" sm="1" md="5">
              <v-text-field
                label="Brand"
                placeholder=Nike
                clearable
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        mô tả
      </v-row>
    </v-app>
  </v-container>
</template>

<script>
import ProductImage from "../../components/Customer/ProductImage";


export default {
  components: { ProductImage },
  data(){
    return{
      pid: "",
    }
  },
  method: {
    getProductDetailByID() {
      this.$store.dispatch("getProdutDetailByID");
      return this.$store.state.productDetail_Admin;
    },
    created() {
    this.pid = this.$route.params.id;
    },
  },
};
</script>
