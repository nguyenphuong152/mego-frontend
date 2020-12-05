<template>
  <v-row class="d-flex text-start pt-10">
    <v-col>
      <span class="admin">Please choose your color:</span>
       <v-row class="d-flex justify-space-around">
        <v-sheet
          v-for="(col, i) in this.apiCol"
          :key="i"
          v-bind="{ color: col.name }"
          height="36"
          width="36"
          shaped
          @click="
            checkFalse();
            checkTrue(col);
          "
        >
          <v-icon color="white" v-show="col.show">mdi-check</v-icon>
        </v-sheet>
      </v-row>
    </v-col>
    <!-- <v-col>
     
    </v-col> -->
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      apiCol: null,
      text: "",
    };
  },
  methods: {
    checkFalse: function() {
      for (var i = 0; i < this.colors.length; i++) {
        this.colors[i].show = false;
      }
    },
    checkTrue: function(col) {
      col.show = true;
    },
    fetchColor: function() {
      this.axios
        .get("https://mego-backend.herokuapp.com/api/guest/colors")
        .then((response) => {
          (this.apiCol = response.data);
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.fetchColor();
  },
};
</script>

<style></style>
