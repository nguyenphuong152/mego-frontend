<template>
  <v-data-table
    :headers="headers"
    :items="products"
    class="elevation-1 title-normal"
  >
    <template v-slot:item.path="{ item }">
      <v-img
        :lazy-src="require('../../assets/' + item.path)"
        max-height="100"
        max-width="100"
        :src="require('../../assets/' + item.path)"
      ></v-img>
    </template>
    <template v-slot:item.total="{ item }">
      {{
        Intl.NumberFormat("en-EN", { maximumSignificantDigits: 3 }).format(
          calTotal(item)
        )
      }}
    </template>
    <template v-slot:item.quantity="{ item }">
      <v-col cols="12">
           <v-text-field
        placeholder="Dense & Rounded"
        filled
        rounded
        dense
        v-model="item.quantity"
      ></v-text-field>
      </v-col>
           
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
        { text: "Price", value: "price" },
        { text: "Quantity", value: "quantity" },
        { text: "Total", value: "total" },
      ],
      products: [
        {
          id: 1,
          path: "brand-1.jpg",
          name: "The first shoes",
          price: 1000000,
          quantity: 1,
        },
        {
          id: 2,
          path: "brand-2.jpg",
          name: "The second shoes",
          price: 100000,
          quantity: 2,
          //total: Intl.NumberFormat('en-EN', { maximumSignificantDigits: 3 }).format(100000)
        },
        {
          id: 3,
          path: "brand-2.jpg",
          name: "The third shoes",
          price: 1000000,
          quantity: 3,
          //total:Intl.NumberFormat('en-EN', { maximumSignificantDigits: 3 }).format(100000),
        },
      ],
    };
  },
  methods: {
    calTotal(item) {
      return item.quantity * item.price;
    },
  },
};
</script>

<style></style>
