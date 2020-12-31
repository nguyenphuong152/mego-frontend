<template>
  <v-row class="mt-8">
    <v-col
      v-for="(item, index) in items"
      :key="index"
      class="d-flex child-flex"
      cols="12"
      md="4"
    >
      <v-img
        :src="item.src"
        class="grey lighten-2 img-hover-zoom"
        width="100"
        height="400"
      >
        <v-row align="center" justify="center" class="fill-height ma-0">
          <v-btn
            tiled
            color="white"
            class="product-detail--title"
            align="center"
            @click="goto(item.id)"
          >
            {{ item.title }}
          </v-btn>
        </v-row>

        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Shop Winter Collection",
          src: require("../../assets/collection1.png"),
        },
        {
          id: 2,
          title: "Shop Women's Collection",
          src: require("../../assets/collection2.png"),
        },
        {
          id: 3,
          title: "Shop Men's Collection",
          src: require("../../assets/collection3.png"),
        },
      ],
    };
  },
  methods: {
    goto: function(path) {
      if (path === 2) this.$router.push({ name: "Women" });
      else if (path === 3 || path === 1) this.$router.push({ name: "Men" });
    },
  },
};
</script>

<style></style>
