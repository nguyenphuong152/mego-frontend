<template>
<v-container text-start>
    <div class="title-collection">Product Categories</div>
<v-list>
      <v-list-item-group v-model="model">
        <v-list-item
          v-for="(item, i) in collections"
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
    getCollections() {
      return this.$store.state.collections;
    }
  },
   mounted() {
    this.$store.dispatch("getCollections");
  },
}
</script>

<style>

</style>