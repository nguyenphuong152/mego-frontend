<template>
  <v-container>
      <v-card class="text-start">
           <v-list dense>
      <a class="admin pl-4 font-weight-black">Best Seller</a>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(banners, i) in banners"
          :key="i"
        >
         <v-list-item-content>
            <v-list-item-title v-text="banners.name" class="text-start"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title v-text="banners.order" class="text-end"></v-list-item-title>
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
      banners: [
        { name: "indigo", order: "First" },
        { name: "black", order: "Second" },
        { name: "pink", order: "Third" },
        { name: "red lighten-1", order: "Fourth" },
        { name: "deep-purple accent-4", order: "Fifth" },
    ],
    }),
}
</script>

<style>

</style>