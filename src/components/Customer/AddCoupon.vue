<template>
  <div class="app text-start">
    <a class="admin-nav font-weight-medium black--text">Your Coupons</a>
    <v-row class="d-flex align-baseline">
      <v-col cols="8">
        <v-text-field
          class="admin"
          label="Coupon"
          outlined
          v-model="coupon"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-btn depressed color="primary" @click="addCoupon()">
          Add
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coupon: "",
    };
  },

  methods: {
    addCoupon() {
      this.$store.dispatch("setCoupon", this.coupon);
    },
  },
};
</script>

<style></style>
