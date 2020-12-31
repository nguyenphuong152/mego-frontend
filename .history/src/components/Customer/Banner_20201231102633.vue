<template>
  <v-app>
    <v-carousel
      cycle
      height="450"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-img>
          :src="`https://mego-backend.herokuapp.com/api/image/banner/${slide} `"
          :lazy-src="
          `https://mego-backend.herokuapp.com/api/image/banner/${slide} ` "
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: [],
    };
  },
  computed: {
    banners() {
      return this.$store.getters.listBanner;
    },
  },
  created() {
    this.$store.dispatch("getBanner");
    this.slides = this.banners;
    console.log(this.slides);
  },
};
</script>
