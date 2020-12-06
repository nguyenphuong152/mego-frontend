<template>
  <v-data-table
    :headers="headers"
    :items="this.cart"
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
    <template v-slot:item.name="{ cart.name }" >
      <span class="product-name font-weight-medium">
{{
        Intl.NumberFormat("en-EN", { maximumSignificantDigits: 3 }).format(
          calTotal(item)
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
  </v-data-table>
</template>

<script>
export default {
  data() {
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
        { text: "Quantity", value: "quantity" },
        { text: "Total", value: "total" },
      ],
    };
  },
  methods: {
    calTotal(item) {
      return item.quantity * item.price;
    },
  },
  computed:{
    cart(){
      return this.$store.state.cart;
    }
  }
};
</script>

<style></style>
