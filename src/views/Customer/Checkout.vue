<template>
  <div class="userlogin">
    <v-sheet color="grey lighten-3" height="150">
      <v-container py-8>
        <span class="title-normal">Checkout</span>
        <br />
        <span class="title-shoes">Home/Checkout</span>
      </v-container>
    </v-sheet>
    <v-container nav>
      <v-row>
        <v-col cols="4" class="hidden-sm-and-down">
          <v-sheet color="teal lighten-4" v-if="!isLogin">
            <v-container pa-8 text-start>
              <span class="admin">Returning customer?</span>

              <v-expansion-panels flat dense>
                <v-expansion-panel class="admin text-start pa-0">
                  <v-expansion-panel-header>
                    Login here!
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-text-field
                      label="Email"
                      v-model="email"
                      outlined
                    ></v-text-field>
                    <v-text-field
                      label="Password"
                      v-model="password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show1 ? 'text' : 'password'"
                      @click:append="show1 = !show1"
                      outlined
                    ></v-text-field>
                    <v-btn depressed color="primary" @click="validate">
                      Login
                    </v-btn>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-container>
          </v-sheet>
          <br v-if="!isLogin" />
          <v-sheet color="teal lighten-4">
            <v-container pa-8 text-start>
              <strong class="admin" text-start>Billing Details</strong>
              <billingDetail />
            </v-container>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet color="grey lighten-3">
            <v-container pa-8 text-start>
              <strong class="admin">Your Order</strong>
              <br />
              <br />
              <totalProducts />
              <br />
              <v-divider></v-divider>
              <br />
              <strong class="admin">Payment Method</strong>
              <payment />
              <v-divider></v-divider>
              <v-row class="admin">
                <v-col>
                  <strong>
                    Subtotal
                  </strong>
                </v-col>
                <v-col>
                  <span class="pl-6">
                    {{
                      Intl.NumberFormat("vn-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(bill.subtotal)
                    }}</span
                  >
                </v-col>
              </v-row>
              <v-row class="admin">
                <v-col>
                  <strong>Shipping</strong>
                </v-col>
                <v-col>
                  <span class="pl-6">
                    {{
                      Intl.NumberFormat("vn-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(bill.shipping)
                    }}</span
                  >
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row class="admin">
                <v-col cols="6">
                  <strong>Total</strong>
                </v-col>
                <v-col>
                  <span class="pl-6">
                    {{
                      Intl.NumberFormat("vn-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(bill.total)
                    }}</span
                  >
                </v-col>
                <v-col cols="3">
                  <v-btn
                    depressed
                    color="primary"
                    @click="goCheckout(bill.total)"
                  >
                    Place Order
                  </v-btn>
                  <v-dialog v-model="showDialog" persistent max-width="290">
                    <v-card>
                      <v-card-title class="headline">
                        Notification
                      </v-card-title>
                      <v-card-text
                        >Your order has successfully created!</v-card-text
                      >
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue-grey darken-1"
                          text
                          @click="showDialog = false"
                        >
                          Close
                        </v-btn>
                        <v-btn color="green darken-1" text @click="goHome()">
                          Back to home
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
          <br />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import billingDetail from "../../components/Customer/BillingDetail";
import payment from "../../components/Customer/PaymentMethods";
import totalProducts from "../../components/Customer/TotalProductConfirmed.vue";
import axios from "axios";

export default {
  components: {
    billingDetail,
    payment,
    totalProducts,
  },
  data() {
    return {
      email: "",
      password: "",
      show1: false,
      uid: "",
      address: "aaadsfsd",
      bill: [],
      select: ["Viet Nam"],
      items: ["US", "UK", "AUS", "CANADA"],
      showDialog: false,
    };
  },
  created() {
    this.bill = this.$store.getters.bill;
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
    cart() {
      return this.$store.getters.cart;
    },
  },
  methods: {
    validate: async function() {
      await this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      setTimeout(() => {
        if (this.getUser.name == null) {
          this.dialog = true;
        } else {
          this.$router.push({ name: "Home" });
        }
      }, 2000);
    },
    goHome() {
      this.showDialog = false;
      setTimeout(() => {
        this.$store.dispatch("deleteCart");
        this.$router.push("/");
      }, 2000);
    },
    goCheckout: async function(value) {
      this.uid = this.$store.getters.getUser.id;
      let token = localStorage.getItem("token");
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        await this.$store.dispatch("placeOrder", {
          user_id: this.uid,
          address: this.address,
          total_amount: value,
          status: false,
        });
        await setTimeout(() => {
          let orderId = this.$store.getters.orderId;
          console.log("order Id nef", orderId);
          for (let i = 0; i < this.cart.length; i++) {
            this.$store.dispatch("createOrderDetail", {
              product_detail_id: this.cart[i].product.id,
              order_id: orderId,
              number: this.cart[i].quantity,
            });
          }
        }, 5000);
        this.showDialog = true;
      }
    },
  },
};
</script>
