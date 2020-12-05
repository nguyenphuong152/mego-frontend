<template>
<v-row class="d-flex align-baseline  justify-center text-start">
    <v-col>
<span class="admin">Please choose your size:</span>
    </v-col>
    <v-col>
 <v-btn-toggle v-model="text" tile color="cyan accent-5" group class="admin">
    <v-btn v-for="(size, i) in sizes" :key="i" :value="size.name">
      {{ size.name }}
    </v-btn>
  </v-btn-toggle>
    </v-col>
</v-row>
 
</template>

<script>
export default {
  data() {
    return {
      text: "",
      sizes: null,
    };
  },
  methods : {
    fetchSize: function() {
      this.axios
        .get("https://mego-backend.herokuapp.com/api/guest/sizes")
        .then((response) => {
          (this.sizes = response.data), console.log(response);
        })
        .catch((error) => console.log(error));
    }
  },
  mounted() {
    this.fetchSize();
  }
   
};
</script>

<style></style>
