<template>
  <v-container text-start>
    <v-chip-group
      v-model="model"
      column
      class="title-collection"
      color="cyan"
       @click="viewProductByTag(item)"
    >
      <v-chip filter outlined v-for="item in getModels" :key="item.id">
        {{ item.name }}
      </v-chip>
    </v-chip-group>
  </v-container>
</template>

<script>
export default {
  props:['gender'],
  data: () => ({
    model: [1],
  }),
  computed: {
    getModels() {
      return this.$store.state.models;
    },
  },
  mounted() {
    this.$store.dispatch("getProductModels", this.gender);
  },
  methods: {
    viewProductByTag(item) {
      console.log(item.id)
      this.$emit("sendTag", item.id);
      this.$store.dispatch("toggleRerender")
    },
  },
};
</script>

<style></style>
