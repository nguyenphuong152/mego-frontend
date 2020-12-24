<template>
  <v-app class="admin">
    <v-main>
      <v-row style="margin-left: 425px">
        <h1>Product List</h1>
        <v-btn color="yellow" style="margin-left: 250px">
          Add new Product
        </v-btn>
      </v-row>
        <v-container width="100%">
          <div>
            <v-row class="flex-table">
              <v-col>Product ID</v-col>
              <v-col>Name</v-col>
              <v-col>Model</v-col>
              <v-col>Brand</v-col>
              <v-col>Action</v-col>
            </v-row>
          </div>
          <div
            v-for="(products,index) in this.$store.state.products"
            :key ="index"
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
                @click="goDetail(products.id)"
                >View</v-btn
              >
              <v-btn color="red " style="margin: 5px"> Delete </v-btn>
            </v-row>
          </div>
        </v-container>
    </v-main>
  </v-app>
</template>

<script>


export default {
  components: {},
  data: () => ({
    isShowProductDetail: false,
  }),
  methods: {
    // goDetail: function(id) {
    //   setTimeout(() => {
    //      this.$router.push({ name: "ProductDetailAdmin", params: { id }});
    //   }, 500);
    //    this.$store.dispatch('getProductDetailByID',id);
   
    // },
    goDetail: function(id) {
    this.$router.push({ name: "ProductDetailAdmin", params: { id }});
    },
    listProduct() {
      this.$store.dispatch("getProducts");
      return this.$store.state.products;
    },
  },
  mounted:function(){
    this.listProduct()
  },
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
