<template>
  <v-row class="d-flex align-baseline text-start">
    <v-col>
      <span class="admin">Please choose your size:</span>
    </v-col>
    <v-col>
      <v-btn-toggle tile color="cyan accent-5" group class="admin">
        <v-btn
          v-for="(size, i) in sizes"
          :key="i"
          :value="size.name"
          @click="sendSize(size.id)"
          v-model="size.id"
        >
          {{ size.name }}
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
      val: 1,
    };
  },
  methods: {
    // checkNull: function(colorID, index) {
    //   if (colorID === "" || index === "") {
    //     return false;
    //   }
    //   return true;
    // },
    sendSize: function(index) {
      // if (this.checkNull(index, this.colorID)) {

      // }
      // } else {
      //   this.warning = "Please select all fields";
      // }
      // this.$store.dispatch("getPriceWithColorSize", {
      //   productId: this.productID,
      //   colorId: this.colorID,
      //   sizeId: index,
      // });
      // console.log(this.getPriceFromSize);
      this.$emit("sendSize", index);
    },
  },
  mounted() {
    this.$store.dispatch("getSizesOfOneProduct", this.productID);
  },
  computed: {
    sizes() {
      return this.$store.getters.sizesOfOneProduct;
    },
    // getPriceFromSize() {
    //   return this.$store.getters.price;
    // },
  },
};
</script>

<style></style>
