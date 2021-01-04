<template>
  <v-data-table
    :headers="headers"
    :items="products"
    class="elevation-1 title-normal"
  >
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
        { text: "Product", value: "name" },
        { text: "Price", value: "price" },
        { text: "Quantity", value: "quantity" },
        { text: "Total", value: "total" },
      ],
      products: [],
    };
  },
  methods: {
    calTotal(item) {
      return item.quantity * item.price;
    },
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
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
