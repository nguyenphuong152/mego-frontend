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
          :lazy-src="`https://mego-backend.herokuapp.com/api/image/banner/${slide}
          ` "
        </v-img>
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
    for (var i = 0; i < this.banners.length; i++) {
      this.slides.push(this.banners[i].priority);
    }
    console.log("hi", this.slides);
  },
};
</script>
