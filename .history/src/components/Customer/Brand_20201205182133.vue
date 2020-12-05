<template>
<v-container text-start>
    <div class="title-collection">Brands</div>
<v-list>
      <v-list-item-group v-model="model" color="cyan">
        <v-list-item
          v-for="(item, i) in getCollections"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.name" class="title-shoes"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
</v-container>
</template>

<script>
export default {
data: () => ({
      model: 1,
    }),
  computed: {
    getBrands() {
      return this.$store.getters.brands;
    }
  },
   mounted() {
    this.$store.dispatch("getBrands");
  },
}
</script>

<style>

</style>