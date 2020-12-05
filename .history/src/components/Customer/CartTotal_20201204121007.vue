<template>
  <v-container class="text-start admin">
    <a class="admin-nav font-weight-medium black--text">Cart Totals</a>
    <v-row>
      <v-col>
        <strong> Subtotal</strong>
      </v-col>
      <v-col cols="8">
        <span class="pl-6">{{
          Intl.NumberFormat("vn-VN", {
            style: "currency",
            currency: "VND",
          }).format(total)
        }}</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <strong> Shipping</strong>
      </v-col>
      <v-col cols="8">
        <v-expansion-panels flat dense>
          <v-expansion-panel class="admin text-start pa-0">
            <v-expansion-panel-header>
              Change Address
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-combobox
                class="admin text-start"
                v-model="select"
                :items="items"
                dense
                filled
                solo
                flat
              ></v-combobox>
              <v-text-field label="City" outlined></v-text-field>
              <v-text-field label="Postcode/ZIP" outlined></v-text-field>
              <v-btn depressed color="primary">
                Update
              </v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <div class="admin pl-4 d-flex child-flex">
          <input type="radio" id="one" value="100000" v-model="price" />
          <label for="one">Fast express 2H</label>
          <br />
          <input type="radio" id="two" value="200000" v-model="price" />
          <label for="two">Standard shipping</label>
          <br />
          <span>
            {{
              Intl.NumberFormat("vn-VN", {
                style: "currency",
                currency: "VND",
              }).format(price)
            }}</span
          >
        </div>
      </v-col>
    </v-row>
      <v-row>
      <v-col>
        <strong> Subtotal</strong>
      </v-col>
      <v-col cols="8">
        <span class="pl-6">{{
          Intl.NumberFormat("vn-VN", {
            style: "currency",
            currency: "VND",
          }).format(total)
        }}</span>
      </v-col>
    </v-row>
    <v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col>
        <strong> Total</strong>
      </v-col>
      <v-col class="text-start pl-11">
        <strong class="product-name ">{{
          Intl.NumberFormat("vn-VN", {
            style: "currency",
            currency: "VND",
          }).format(calFinalAmount(total, price, 0))
        }}</strong>
      </v-col>
      <v-col class="text-end">
        <v-btn depressed color="primary" @click="goCheckout()">
          Check out
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    total: Number,
  },
  data() {
    return {
      totalAmount: "",
      price: "",
      select: ["Viet Nam"],
      items: ["US", "UK", "AUS", "CANADA"],
    };
  },
  methods: {
    goCheckout: function() {
      this.$router.push({ name: "Checkout" });
      alert("hi");
    },
    calFinalAmount: function(total, price, coupon) {
      return Number(total) + Number(price) + Number(coupon);
    },
  },
};
</script>

<style></style>
