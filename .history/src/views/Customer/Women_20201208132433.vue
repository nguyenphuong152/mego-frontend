<template>
  <div class="women app">
    <v-sheet color="grey lighten-3" height="150">
      <v-container py-8>
        <span class="title-normal">Women's Product</span>
        <br />
        <span class="title-shoes">Home / Women</span>
      </v-container>
    </v-sheet>
    <v-main>
      <v-container class="app">
        <v-row>
          <v-col cols="3">
            <v-row class="align-center">
              <v-col class="pl-6">
                <v-text-field label="Search"></v-text-field>
              </v-col>
              <v-btn icon class="pr-6">
                <v-icon>
                  mdi-magnify
                </v-icon>
              </v-btn>
            </v-row>
            <productBrand/>
            <productCate :gender="1"/>
          </v-col>
          <v-col>
            <productTag :gender="1"/>
            <v-container>
              <productView/>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import productCate from "../../components/Customer/ProductCategory";
import productView from "../../components/Customer/ProductView";
import productTag from "../../components/Customer/ProductTag";
import productBrand from "../../components/Customer/Brand";

export default {
  components: {
    productCate,
    productView,
    productTag,
    productBrand,
  },
};
</script>
