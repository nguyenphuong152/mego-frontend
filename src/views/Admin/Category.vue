<template>
  <v-app class="admin">
    <v-main>
      <h1>Catagories Manager</h1>
      <CategoriesDetail/>
    </v-main>
  </v-app>
</template>
<script>
  import CategoriesDetail from "../../components/Admin/CategoriesDetail";
  export default {
  components: {
    CategoriesDetail
  },

  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>



<style></style>
