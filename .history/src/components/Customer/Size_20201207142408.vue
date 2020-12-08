<template>
  <v-row class="d-flex align-baseline text-start">
    <v-col>
      <span class="admin">Please choose your size:</span>
    </v-col>
    <v-col>
      <v-btn-toggle
        v-model="text"
        tile
        color="cyan accent-5"
        group
        class="admin"
      >
        <v-btn v-for="(size, i) in sizes" :key="i" :value="size.name" @click="getMoney">
         {{size.name}}
        </v-btn>
      </v-btn-toggle>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["productID"],
  data() {
    return {
      text: "",
    };
  },
  methods: {
    getMoney:function(index)
    {
      alert(index)
    }
  },
  mounted() {
    this.$store.dispatch('getSizesOfOneProduct', this.productID);
  },
  computed: {
    sizes() {
      return this.$store.getters.sizesOfOneProduct;
    },
  },
};
</script>

<style></style>
