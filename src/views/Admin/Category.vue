<template>
  <v-app class="admin">
    <v-main>
      <h1>Catagories Manager</h1>
      <categories-detail :key="toggleRerender"/>
    </v-main>
  </v-app>
</template>
<script>
  import CategoriesDetail from "../../components/Admin/CategoriesDetail";
  export default {
    components: {
      CategoriesDetail
    },
    data(){
      return{
      }
    },
    computed:{
      toggleRerender() {
        return this.$store.getters.increment;
    },
    }
};
</script>



<style></style>
