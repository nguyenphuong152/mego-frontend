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

};
</script>



<style></style>
