<template>
  <div class="app">
    <v-main>
      <div class="d-flex flex-column">
        <Banner class="hidden-sm-and-down" />
        <v-container class="pa-0">
          <span class="slogan">FIND YOUR IDEAL STYLE HERE</span>
          <Collection />
        </v-container>
        <v-container my-8>
          <span class="slogan">BEST SELLER</span>
          <BestSeller />
        </v-container>
        <v-container my-8>
          <span class="slogan">TRUSTED PARTNERS</span>
          <Partner />
        </v-container>
      </div>
    </v-main>
  </div>
</template>

<script>
import Collection from "../../components/Customer/Collection";
import Banner from "../../components/Customer/Banner";
import BestSeller from "../../components/Customer/BestSeller";
import Partner from "../../components/Customer/Partner";

export default {
  components: {
    Banner,
    Collection,
    BestSeller,
    Partner,
  },
  beforeCreate() {
    this.$store.dispatch("getBanner");
  },
};
</script>
