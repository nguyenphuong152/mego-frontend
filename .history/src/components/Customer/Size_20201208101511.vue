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
        <v-btn
          v-for="(size, i) in sizes"
          :key="i"
          :value="size.name"
          @click="getMoney(size.id)"
        >
          {{ size.name }}
        </v-btn>
      </v-btn-toggle>
    </v-col>
    <span>{{warning}}</span>
  </v-row>
</template>

<script>
export default {
  props: ["productID", "colorID"],
  data() {
    return {
      text: "",
      warning: "",
    };
  },
  methods: {
    checkNull: function(colorID, index) {
      if (colorID === "" || index === "") {
        this.warning = "Please select all fields";
        return false;
      }
      this.warning = "";
      return true;
    },
    getMoney: function(index) {
      if (this.checkNull(index, this.colorID)) {
        this.$store.dispatch("getPriceWithColorSize", {
          productId: this.productID,
          colorId: this.colorID,
          sizeId: index,
        });
        this.$emit("sendPrice", this.getPriceFromSize);
      }
    },
  },
  mounted() {
    this.$store.dispatch("getSizesOfOneProduct", this.productID);
  },
  computed: {
    sizes() {
      return this.$store.getters.sizesOfOneProduct;
    },
    getPriceFromSize() {
      return this.$store.getters.price;
    },
  },
};
</script>

<style></style>
