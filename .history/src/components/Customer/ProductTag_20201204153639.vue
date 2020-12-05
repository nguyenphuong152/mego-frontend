<template>
  <v-container text-start>
    <div class="title-collection">Product Tags</div>
    <v-chip-group
      v-model="model"
      column
      multiple
      class="title-collection"
    >
      <v-chip filter outlined v-for="item in getModels" :key="item.id">
        {{ item.name }}
      </v-chip>
    </v-chip-group>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    model: [1],
  }),
  computed: {
    getModels() {
      return this.$store.state.models;
    },
  },
  mounted() {
    this.$store.dispatch("getProductModels", 1);
  },
};
</script>

<style></style>
