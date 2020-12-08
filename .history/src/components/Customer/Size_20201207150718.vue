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
        <v-btn v-for="(size, i) in sizes" :key="i" :value="size.name" @click="getMoney(size.id)">
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
      this.$store.dispatch('getPriceWithColorSize',{productId:this.productID,colorId:2,sizeId:index});
    //  this.$emit("sendPrice", this.getPriceFromSize);
      alert(this.getPriceFromSize)
    }
  },
  mounted() {
    this.$store.dispatch('getSizesOfOneProduct', this.productID);
  },
  computed: {
    sizes() {
      return this.$store.getters.sizesOfOneProduct;
    },
    getPriceFromSize(){
      return this.$store.getters.selectedProduct;
    }
    
  },
};
</script>

<style></style>
