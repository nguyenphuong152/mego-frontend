<template>
  <div class="men app">
    <v-sheet color="grey lighten-3" height="150">
      <v-container py-8>
        <span class="title-normal">Men's Product</span>
        <br />
        <span class="title-shoes">Home / Men</span>
      </v-container>
    </v-sheet>
    <v-main>
      <v-container class="app">
        <v-row>
          <v-col cols="3">
            <v-row class="align-baseline">
              <v-text-field size="5" label="ID"></v-text-field>
              <v-btn icon>
                <v-icon>
                  mdi-magnify
                </v-icon>
              </v-btn>
            </v-row>
            <productCate />
            <productTag />
          </v-col>
          <v-col>
            <v-container>
              <productView />
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

export default {
  components: {
    productCate,
    productView,
    productTag,
  },
};
</script>
