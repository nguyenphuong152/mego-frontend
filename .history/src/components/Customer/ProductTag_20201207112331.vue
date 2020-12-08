<template>
  <v-container text-start>
    <v-chip-group
      v-model="model"
      column
      multiple
      class="title-collection"
      color="cyan"
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
  created() {
    this.$store.dispatch("getProductModels", 1);
    var element = {};
    element.id = 10000;
    element.name = "All";
    this.getModels.push(element);
  },
};
</script>

<style></style>
