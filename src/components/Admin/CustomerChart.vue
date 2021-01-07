<template>
  <v-card>
    <canvas ref="myChart" :styles="myStyles"></canvas>
  </v-card>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "monthly-customer-chart",
  mounted() {
    new Chart(this.$refs.myChart, {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Total Customers",
            borderColor: "#FB8C00",
            backgroundColor: "#FFCC80",
            data: [300, 100, 450, 550, 450, 100, 20, 8, 50, 100, 80, 300],
          },
        ],
      },
    });
  },
  computed: {
    myStyles() {
      return { height: "100px" };
    },
  },
};
</script>
