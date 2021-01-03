<template>
  <v-form ref="form" v-model="valid" lazy-validation class="admin">
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Email"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Password"
      required
    ></v-text-field>

    <v-checkbox v-model="checkbox" label="Remember me" required></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="white"
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
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Name is required"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
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
