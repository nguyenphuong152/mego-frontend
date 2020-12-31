<template>
  <v-row class="d-flex align-baseline text-start">
    <v-col>
      <span class="admin">Please choose your size:</span>
    </v-col>
    <v-col>
      <v-btn-toggle
        tile
        color="cyan accent-5"
        group
        class="admin"
        v-model="val"
      >
        <v-btn
          v-for="(size, i) in sizes"
          :key="i"
          :value="size.name"
          @click="sendPrice(size.id)"
        >
          {{ size.name }}
        </v-btn>
      </v-btn-toggle>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["productID", "colorID"],
  data() {
    return {
      val: 1,
    };
  },
  methods: {
    sendPrice(index) {
      this.$store.dispatch("getPriceWithColorSize", {
        productId: this.productID,
        colorId: this.colorID,
        sizeId: index,
      });
      setTimeout(() => {
        this.$emit("sendPrice", this.getPriceFromSize);
        this.$emit("sendSize", index);
      }, 500);
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
