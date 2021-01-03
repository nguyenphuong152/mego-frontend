<template>
  <v-main>
    <v-app>
      <v-row style="height: 2px">
        <v-btn
          color="white"
          class="ma-2 white--text admin;text-start"
          @click="backToOrderPage()"
        >
          <v-icon color="black"> mdi-arrow-left </v-icon>
        </v-btn>
        <h1 style="margin-left: 355px">Order Detail</h1>
      </v-row>
      <v-row style="height: 600px">
        <v-col>
          <div>
            <v-card style="width: 700px" class="modi-table">
              <v-img
                :src="`https://mego-backend.herokuapp.com/api/image/product/1`"
                max-height="180"
                max-width="180"
                style="margin-left: 15px; margin-bottom: 15px; margin-top: 15px"
              />
              <div style="margin-top: 15px">Tên sản phẩm</div>
              <div style="margin-top: 15px">giá sản phẩm</div>
            </v-card>
          </div>
        </v-col>
        <v-col>
          <v-row>
            <v-card style="width: 350px">
              Customer
              <v-row>
                <v-col> Tên </v-col>
                <v-col> Sdt </v-col>
              </v-row>
              <v-row>
                <v-col> dia chi </v-col>
              </v-row>
            </v-card>
          </v-row>
          <br /><br />
          <v-row>
            <v-card style="width: 350px">
              <h3>Total: 700</h3>
            </v-card>
          </v-row>
          <br /><br />
          <v-row>
            <v-btn color="red lighten-1" elevation="1" style="width: 350px"
              >Ship</v-btn
            >
          </v-row>
        </v-col>
      </v-row>
    </v-app>
  </v-main>
</template>

<script>
export default {
  prop: ["OrderID"],
  data() {
    return {};
  },
  methods: {
    backToOrderPage() {
      const path = "/admin/orderlist";
      if (this.$route.path !== path) this.$router.push(path);
    },
  },
  computed: {},
  created: function () {
    this.OrderID = this.$route.params.id;
    this.$store.dispatch("getOrderDetail", this.OrderID);
  },
};
</script>

<style lang="scss" scoped>
.flex-table {
  border-bottom: 1px black solid;
  &:nth-of-type(2n) {
    background-color: #dedede;
  }
}
.modi-table {
  display: grid;
  grid-template-columns: repeat(auto-fill, 33%);
  padding: 1px;
  border-bottom: 1px black solid;
  &:nth-of-type(2n) {
    background-color: #dedede;
  }
}
</style>
