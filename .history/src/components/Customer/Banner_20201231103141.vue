<template>
  <v-app>
    <v-carousel
      cycle
      height="450"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(banner, i) in banners" :key="i">
        <v-img>
          :src="`https://mego-backend.herokuapp.com/api/image/banner/${banner.priority}
          `" :lazy-src="
          `https://mego-backend.herokuapp.com/api/image/banner/${banner.priority}
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
    this.$store.dispatch("getBanner");
    for (var i = 0; i < this.banners.length; i++) {
      this.slides.push(this.banners[i].priority);
    }
  },
};
</script>
