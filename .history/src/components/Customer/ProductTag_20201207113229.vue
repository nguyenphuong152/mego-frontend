<template>
  <v-container text-start>
    <v-chip-group
      v-model="model"
      column
      multiple
      class="title-collection"
      color="cyan"
    >
      <v-chip filter outlined v-for="item in this.listModels" :key="item.id">
        {{ item.name }}
      </v-chip>
    </v-chip-group>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    model: [1],
    listModels: [],
  }),
  computed: {
    getModels() {
      return this.$store.state.models;
    },
  },
  created() {
    this.$store.dispatch("getProductModels", 1);

    this.listModels = this.getModels.map((c) => ({
      id: c.id,
      name: c.name,
    }));

    var element = {};
    element.id = 10000;
    element.name = "All";

    this.listModels.push({ element: element });

    console.log(this.listModels);
  },
};
</script>

<style></style>
