<template>
  <v-container>
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
      <template v-slot:item.actions="{ item }">
        <v-icon color="red" medium @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
      <template slot="body.append">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

        <v-container>
          <v-btn
            @click="updateTotal"
            color="cyan"
            class="white--text title-normal hidden-sm-and-down"
          >
            Confirm</v-btn
          >
        </v-container>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-toolbar dark color="cyan" height="50px"
              >Do you want to remove this item?</v-toolbar
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
    </v-data-table>
    <!-- <v-container>
      <v-btn
        @click="updateTotal"
        color="cyan"
        class="white--text title-normal hidden-md-and-up"
      >
        Confirm</v-btn
      >
    </v-container> -->
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
    this.products = this.cart.map((c) => ({
      id: c.product.id,
      path: c.product.id,
      name: c.product.name,
      price: c.price,
      quantity: c.quantity,
      total: "",
    }));
  },
};
</script>

<style></style>
