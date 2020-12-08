<template>
  <v-row class="mt-8">
    <v-col v-for="n in 3" :key="n" class="d-flex child-flex" cols="4">
      <v-img
        :src="`https://picsum.photos/500/300?image=${n * 8 + 52}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 8 + 52}`"
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
          >
            {{ titles[n - 1] }}
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
      titles: [
        "Shop Winter Collection",
        "Shop Women's Collection",
        "Shop Men's Collection",
      ],
    };
  },
  methods:{
    goto:function(path) {
      if(path===2)
      this.$router.push({ name: "Men"});
      else if(path===3)
       this.$router.push({ name: "Women"});
    }
  }
};
</script>

<style></style>
