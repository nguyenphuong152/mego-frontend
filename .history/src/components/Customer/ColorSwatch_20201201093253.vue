<template>
  <v-row class="d-flex text-start justify-center">
    <v-col>
      <span class="admin">Please choose your color:</span>
    </v-col>
    <v-col>
      <v-row class="d-flex justify-space-around">
        <v-sheet
          v-for="(color,i) in colors"
          :key="i"
          color="color.value"
          elevation="1"
          height="36"
          width="36"
          console.log(color)
        ></v-sheet>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      colors: [
        {
          value: "red",
        },
        {
          value: "green",
        },
        {
          value: "blue",
        },
        {
          value: "cyan",
        },
      ],
    };
  },
  methods: {
    alertColor: function() {
      var el = document.getElementsByClassName("color");
      alert(el);
    },
  },
};
</script>

<style></style>
