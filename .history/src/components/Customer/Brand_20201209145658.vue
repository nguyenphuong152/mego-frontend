<template>
<v-container text-start>
    <div class="title-collection">Brands</div>
<v-list shaped>
      <v-list-item-group v-model="model" color="cyan">
        <v-list-item
          v-for="(item, i) in getBrands"
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
      return this.$store.getters.listBrand;
    }
  },
   mounted() {
    this.$store.dispatch("getBrands");
  },
}
</script>

<style>

</style>