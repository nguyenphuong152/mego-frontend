<template>
  <v-form ref="form" v-model="valid" lazy-validation class="admin">
    <v-text-field
      v-model="email"
      :rules="nameRules"
      label="Email"
      required
    ></v-text-field>

    <v-text-field
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      v-model="password"
      :type="show1 ? 'text' : 'password'"
      @click:append="show1 = !show1"
      label="Password"
      required
    ></v-text-field>

    <v-checkbox v-model="checkbox" label="Remember me" required></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="black"
      class="mr-4 white--text slogan-3"
      @click="validate"
    >
      Login
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    show1: false,
    loading: false,
    valid: true,
    password: "",
    nameRules: [(v) => !!v || "Name is required"],
    email: "",
    checkbox: false,
  }),

  methods: {
    validate: async function() {
      this.$refs.form.validate();
      await this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      if (this.$store.getters.getUser.name == null) {
        console.log("login sai");
      } else {
        this.$router.push({ name: "Home" });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
  computed: {},
};
</script>

<style></style>
