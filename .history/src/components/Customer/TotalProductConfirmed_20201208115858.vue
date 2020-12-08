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
    updateTotal() {
      this.$emit("sendTotal", this.totalAmount);
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
      name: c.product.name,
      price: c.price,
      quantity: "1",
      total: "",
    }));
  },
};
</script>

<style></style>
