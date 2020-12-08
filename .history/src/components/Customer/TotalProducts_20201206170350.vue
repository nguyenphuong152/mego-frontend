<template>
  <v-data-table
    :headers="headers"
    :items="products"
    class="elevation-1 title-normal"
  >
    <!-- <template v-slot:item.path="{ item }">
      <v-img
        :lazy-src="require('../../assets/' + item.path)"
        max-height="100"
        max-width="100"
        :src="require('../../assets/' + item.path)"
      ></v-img>
    </template> -->
    <template v-slot:item.total="{ item }" >
      <span class="product-name font-weight-medium">
{{
        Intl.NumberFormat("en-EN", { maximumSignificantDigits: 3 }).format(
          calTotal(item)
        )
      }}
      </span>
      
    </template>
    <template v-slot:item.price="{ item }" >
      <span class="product-name font-weight-medium">
{{
        Intl.NumberFormat("en-EN", { maximumSignificantDigits: 3 }).format(
          item.price
        )
      }}
      </span>
      
    </template>
    <template v-slot:item.quantity="{ item }">
      <v-text-field
        filled
        rounded
        dense
        v-model="item.quantity"
      ></v-text-field>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
         color="cyan"
        medium
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: function() {
    return {
      headers: [
        {
          text: "",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Preview", value: "path" },
        { text: "Product", value: "name" },
        { text: "Price", value: "price" },
        { text: "Quantity", value: "quantity" },
        { text: "Total", value: "total" },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      products: [],
    };
  },
  methods: {
    calTotal(item) {
      return item.quantity * item.price;
    },
     deleteItem (item) {
         this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
       deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },
  },
  watch: {
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
  },
  created() {
    this.products = this.cart.map(c => ({ id: c.product.id, path: c.product.id,  name:c.product.name, price: c.product.product_detail.price, quantity:"1",total:""  }));
  },
};
</script>

<style></style>
