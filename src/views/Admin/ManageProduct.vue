<!--<template>
  <div class="text-left">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="teal"
          dark
          v-bind="attrs"
          v-on="on"
          class=mr-2
          v-model="selectCate"
        >
          Customer
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(Human, index) in Human"
          :key="index"
        >
          <v-list-item-title>{{ Human.type }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="teal"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Product Types
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(ProductTypes, index) in ProductTypes"
          :key="index"
        >
          <v-list-item-title>  
              {{ ProductTypes.type }}       
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
  
</template>

<script>

</script>-->
<template>
  <v-app class="admin">
    <v-main>
      <v-row style="margin-left: 425px">
        <h1>Product List</h1>
        <v-btn color="yellow" style="margin-left: 250px">
          Add new Product
        </v-btn>
      </v-row>
      <v-content>
        <v-container width="100%">
          <!--<v-row>
            <v-col cols="1" sm="10" md="3">
              <v-text-field size="1" label="ID"></v-text-field>
            </v-col>
            <v-col cols="2" sm="1" md="3">
              <v-text-field label="From"></v-text-field>
            </v-col>
            <v-col cols="3" sm="1" md="3">
              <v-text-field label="To"></v-text-field>
            </v-col>
            <v-col cols="4" sm="1" md="2">
              <v-combobox label="Status"> Pending </v-combobox>
            </v-col>
            <v-col cols="5" md="1" style="margin-top: 12px">
              <v-btn>
                <v-icon> mdi-magnify </v-icon>
              </v-btn>
            </v-col>
          </v-row>-->
          <div>
            <v-row class="flex-table">
              <v-col>Product ID</v-col>
              <v-col>Name</v-col>
              <v-col>Model</v-col>
              <v-col>Brand</v-col>
              <!-- <v-col>Description</v-col> -->
              <v-col>Action</v-col>
            </v-row>
          </div>
          <div
            v-for="(products, index) in listProduct"
            :key="index"
            class="flex-table"
          >
            <v-row>
              <v-col>{{ products.id }}</v-col>
              <v-col style="margin-right: 20px">{{ products.name }}</v-col>
              <v-col style="margin-right: 20px">{{
                products.model.name
              }}</v-col>
              <v-col style="margin-right: 25px">{{
                products.brand.name
              }}</v-col>
              <v-btn
                color="blue"
                style="margin: 5px"
                @click="goDetail(products, products.id)"
                >View</v-btn
              >
              <v-btn color="red " style="margin: 5px"> Delete </v-btn>
            </v-row>
          </div>
        </v-container>
      </v-content>
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {},
  data: () => ({
    isShowProductDetail: false,
    products: [],
  }),
  computed: {
    listProduct() {
      this.$store.dispatch("getProducts");
      return this.$store.state.products;
    },
  },
  methods: {
    goDetail: function(products, id) {
      const path = `/admin/product/${id}`
      if (this.$route.path !== path) this.$router.push(path)
      //this.$router.push("/admin/product/",{params: { id } });
      //this.$store.dispatch("getProductInfo", products);
    },
  }
};
</script>

<style lang="scss" scoped>
.flex-table {
  border-bottom: 1px black solid;
  &:nth-of-type(2n) {
    background-color: #dedede;
  }
}
.modi-table {
  display: grid;
  grid-template-columns: repeat(auto-fill, 33%);
  padding: 1px;
  border-bottom: 1px black solid;
  &:nth-of-type(2n) {
    background-color: #dedede;
  }
}
</style>
