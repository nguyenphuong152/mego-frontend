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
    </v-card>

    <v-sheet color="teal lighten-4" width="500" v-else>
      <v-container pa-8 text-start>
        <span class="admin">Returning customer?</span>

        <v-expansion-panels flat dense>
          <v-expansion-panel class="admin text-start pa-0">
            <v-expansion-panel-header>
              Login here!
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-text-field label="Username" outlined></v-text-field>
              <v-text-field label="Password" outlined></v-text-field>
              <v-btn depressed color="primary">
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
      user: "",
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
  beforeCreate() {
    this.user = this.getUser;
    if (this.user == undefined) {
      this.user.name = " ";
      this.user.email = " ";
      this.user.address = " ";
      this.user.phone = " ";
    }
  },
  mounted() {
    this.user = this.getUser;
  },
};
</script>
