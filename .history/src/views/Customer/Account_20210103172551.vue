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
          <span class="product-detail--title">{{ user.name }}</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <span class="product-detail--title">Phone:</span>
        </v-col>
        <v-col class="text-start">
          <span class="product-detail--title">{{ user.phone }}</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <span class="product-detail--title">Address:</span>
        </v-col>
        <v-col class="text-start">
          <span class="product-detail--title">{{ user.address }}</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <span class="product-detail--title">Email:</span>
        </v-col>
        <v-col class="text-start">
          <span class="product-detail--title">{{ user.email }}</span>
        </v-col>
      </v-row>
    </v-card>
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
      return this.$store.getters.user;
    },
    isLogin() {
      this.getUser;
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
