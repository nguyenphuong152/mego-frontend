<template>
  <v-app class="admin">
    <v-main >
      <v-row style="margin-left: 425px">
        <h1>Product List</h1>
        <v-btn 
        color="yellow" 
        style="margin-left: 250px"
        @click="goAddProduct()">
          Add new Product
        </v-btn>
      </v-row>
          <div>
            <v-row class="flex-table">
              <v-col>Product ID</v-col>
              <v-col>Name</v-col>
              <v-col>Model</v-col>
              <v-col>Brand</v-col>
              <v-col>Action</v-col>
            </v-row>
          </div>

            <v-row
                        v-for="(products,index) in this.$store.state.products"
            :key ="index"
            class="flex-table">
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
              <v-btn 
              color="red " 
              style="margin: 5px"
              @click="deleteProduct(products.id)"
              > Delete </v-btn>
            </v-row>
    </v-main>
  </v-app>
</template>

<script>


export default {
  components: {},
  data: () => ({
    isShowProductDetail: false,
    compKey : 0,
  }),
  methods: {
    goDetail: function(id) {
      this.$router.push({ name: "ProductDetailAdmin", params: { id }});
    },
    deleteProduct(id){
      this.$store.dispatch("deleteProduct",id);
      this.forceUpdate();
    },
    forceUpdate(){
      this.compKey +=1;
    },
    goAddProduct(){
      this.$router.push({ name: "AddProductAdmin"});
    }
  },
  created:function(){
    this.$store.dispatch("getProducts");
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
