<template>
  <v-app>
    <v-carousel
      cycle
      height="500"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="n in 2" :key="n">
        <!-- <v-img
          :src="`https://mego-backend.herokuapp.com/api/image/banner/${n}`"
          max-height="500"
        >
        </v-img> -->
        <!-- <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="400"
          max-width="100%"
          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        ></v-img> -->
      </v-carousel-item>
    </v-carousel>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      slides: [],
    };
  },
  computed: {
    banners() {
      return this.$store.getters.listBanner;
    },
  },
  created() {
    // for (var i = 0; i < this.banners.length; i++) {
    //   this.slides.push(this.banners[i].priority);
    // }
    console.log("hi", this.banners);
  },
};
</script>
