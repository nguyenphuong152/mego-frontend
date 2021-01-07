<template>
  <v-container>
    <v-card class="text-start">
      <v-list dense>
        <a class="admin pl-4 font-weight-black">Best Seller</a>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-content>
              <v-list-item-title
                v-text="item.text"
                class="text-start"
              ></v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title
                v-text="item.amount"
                class="text-end"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 1,
    items: [
      { text: "Giay 1", amount: "150" },
      { text: "Giay 2", amount: "100" },
      { text: "Giay 3", amount: "84" },
      { text: "Giay 4", amount: "78" },
      { text: "Giay 10", amount: "50" },
      { text: "Giay 15", amount: "45" },
    ],
  }),
};
</script>

<style></style>
