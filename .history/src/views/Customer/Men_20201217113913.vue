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
          <v-col cols="12" sm="3">
            <v-row class="align-center hidden-xs-only">
              <v-col class="pl-6">
                <v-text-field label="Search" v-model="search"></v-text-field>
              </v-col>
              <v-btn icon class="pr-6" @click="find(search)">
                <v-icon>
                  mdi-magnify
                </v-icon>
              </v-btn>
            </v-row>
            <productCate
              :gender="1"
              @sendCategory="sendCategory"
              class="hidden-xs-only"
            />
            <productBrand @sendBrand="sendBrand" class="hidden-xs-only" />
          </v-col>
          <v-col>
            <productTag
              :gender="1"
              @sendTag="sendTag"
              class="hidden-sm-and-down"
            />
            <v-container>
              <productView
                :filter="filter"
                :category="this.category_id"
                :brand="this.brand_id"
                :tag="this.tag_id"
                :key="toggleRerender"
              />
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
  data() {
    return {
      search: "",
      filter: "",
      category_id: 11,
      brand_id: "",
      tag_id: "",
    };
  },
  methods: {
    find(search) {
      if (search != "") this.filter = search;
    },
    sendCategory(id) {
      this.category_id = id;
    },
    sendBrand(id) {
      this.brand_id = id;
    },
    sendTag(id) {
      this.tag_id = id;
    },
  },
  computed: {
    toggleRerender() {
      console.log(this.$store.getters.increment);
      return this.$store.getters.increment;
    },
  },
};
</script>
