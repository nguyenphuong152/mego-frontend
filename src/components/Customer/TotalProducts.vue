<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="products"
      class="elevation-1 title-normal"
    >
      <template v-slot:item.path="{ item }">
        <v-img
          v-if="
            item.id <= 15
              ? (x = item.id)
              : (x = Math.floor(Math.random() * 15) + 1)
          "
          :src="`https://mego-backend.herokuapp.com/api/image/product/${x} `"
          :lazy-src="
            `https://mego-backend.herokuapp.com/api/image/product/${x}`
          "
          height="100"
          width="100"
        ></v-img>
      </template>
      <template v-slot:item.total="{ item }">
        <span class="product-name font-weight-medium">
          {{
            Intl.NumberFormat("vn-VN", {
              style: "currency",
              currency: "VND",
            }).format(calTotal(item))
          }}
        </span>
      </template>
      <template v-slot:item.price="{ item }">
        <span class="product-name font-weight-medium">
          {{
            Intl.NumberFormat("vn-VN", {
              style: "currency",
              currency: "VND",
            }).format(item.price)
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
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {
      dialogDelete: false,

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
        { text: "Actions", value: "actions", sortable: false },
      ],
      products: [],
      editedIndex: -1,
      editedItem: {
        id: "",
        path: 0,
        name: 0,
        price: 0,
        quantity: 0,
        total: 0,
      },
      defaultItem: {
        id: "",
        path: 0,
        name: 0,
        price: 0,
        quantity: 0,
        total: 0,
      },
    };
  },
  methods: {
    calTotal(item) {
      return item.quantity * item.price;
    },
    deleteItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.products.splice(this.editedIndex, 1);
      this.$store.dispatch("deleteProductFromCart", this.editedItem);
      this.closeDelete();
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    updateTotal() {
      this.$emit("sendTotal", this.totalAmount);
      console.log("state card, ", this.cart);
    },
  },
  watch: {
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    },

    totalAmount: function() {
      var sum = 0;
      this.products.forEach((e) => {
        sum += e.quantity * e.price;
      });
      return sum;
    },
  },
  created() {
    for (let i = 0; i < this.cart.length; i++) {
      let name;
      if (this.cart[i].product.name == null) {
        name = this.cart[i].product.product.name;
      } else {
        name = this.cart[i].product.name;
      }
      let item = [];
      (item.id = this.cart[i].product.id),
        (item.path = this.cart[i].product.id),
        (item.name = name),
        (item.price = this.cart[i].price),
        (item.quantity = this.cart[i].quantity),
        (item.total = "");
      console.log("item ", item);
      this.products.push(item);
    }
  },
};
</script>

<style></style>
