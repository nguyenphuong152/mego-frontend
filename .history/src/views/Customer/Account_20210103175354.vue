<template>
  <div class="account app">
    <v-sheet color="grey lighten-3" height="150">
      <v-container py-8>
        <span class="title-normal">User Account</span>
        <br />
        <span class="title-shoes">Home / MyAccount</span>
      </v-container>
    </v-sheet>
    <v-card v-if="isLogin">
      <v-row>
        <v-col class="text-center">
          <v-img src="../../assets/cat.png" max-width="300" max-height="300">
          </v-img>
        </v-col>
        <v-col>
          <v-row>
            <v-col cols="3">
              <span class="product-detail--title">Name:</span>
            </v-col>
            <v-col class="text-start">
              <span class="product-detail--title">{{ getUser.name }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              <span class="product-detail--title">Phone:</span>
            </v-col>
            <v-col class="text-start">
              <span class="product-detail--title">{{ getUser.phone }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              <span class="product-detail--title">Address:</span>
            </v-col>
            <v-col class="text-start">
              <span class="product-detail--title">{{ getUser.address }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              <span class="product-detail--title">Email:</span>
            </v-col>
            <v-col class="text-start">
              <span class="product-detail--title">{{ getUser.email }}</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>

    <v-sheet color="cyan lighten-4" class="mt-4" v-else>
      <v-container pa-8 text-start>
        <span class="admin" style="fontSize:18px">Returning customer?</span>
        <br />
        <v-expansion-panels flat dense>
          <v-expansion-panel class="admin text-start pa-0 ma-4">
            <v-expansion-panel-header style="fontSize:18px">
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
                outlined
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
              ></v-text-field>
              <v-btn depressed color="primary" @click="login()">
                Login
              </v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      email: "",
      password: "",
    };
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    login: async function() {
      await this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      await this.getUser;
      setTimeout(() => {
        if (this.getUser.name == null) {
          this.dialog = true;
        } else {
          this.$router.push({ name: "Home" });
        }
      }, 1000);
    },
  },
};
</script>
