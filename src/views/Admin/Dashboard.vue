<template>
  <v-container class="admin pa-0">
    <v-row>
      <v-col>
        <v-card color="green darken-1" dark>
          <div class="d-flex flex-no-wrap justify-space-between ">
            <div>
              <v-card-title class="admin-nav">ORDERS</v-card-title>

              <h2
                v-text="amountOrder"
                class="font-weight-bold white--text"
              ></h2>

              <v-card-actions>
                <v-btn class="ml-2 mt-5" outlined rounded small>
                  DETAIL
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img src="../../assets/checklist.png"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card color="light-green darken-1" dark>
          <div class="d-flex flex-no-wrap justify-space-between ">
            <div>
              <v-card-title class="admin-nav">PRODUCTS</v-card-title>

              <h2
                v-text="amountProduct"
                class="font-weight-bold white--text"
              ></h2>

              <v-card-actions>
                <v-btn class="ml-2 mt-5" outlined rounded small>
                  EDIT
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img src="../../assets/box.png"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card color="lime darken-1" dark>
          <div class="d-flex flex-no-wrap justify-space-between ">
            <div>
              <v-card-title class="admin-nav">CUSTOMERS</v-card-title>

              <h2 v-text="amountUser" class="font-weight-bold white--text"></h2>

              <v-card-actions>
                <v-btn class="ml-2 mt-5" outlined rounded small>
                  DETAIL
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img src="../../assets/customer.png"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" class="pa-0">
        <productsale />
      </v-col>
      <v-col>
        <cuschart />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import productsale from "../../components/Admin/ProductSale";
import cuschart from "../../components/Admin/CustomerChart";

export default {
  components: { productsale, cuschart },
  data: () => ({}),
  computed: {
    amountProduct() {
      return this.$store.getters.numbProduct;
    },
    amountOrder() {
      return this.$store.getters.numbOrder;
    },
    amountUser() {
      return this.$store.getters.numbUser;
    },
  },
  created: async function() {
    await this.$store.dispatch("getProducts");
    await this.$store.dispatch("getOrderList_Admin");
    await this.$store.dispatch("getUserList_Admin");

    //
  },
};
</script>
