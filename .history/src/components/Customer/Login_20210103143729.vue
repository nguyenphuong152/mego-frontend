<template>
  <v-form ref="form" v-model="valid" lazy-validation class="admin">
    <v-text-field
      v-model="email"
      :rules="nameRules"
      label="Email"
      required
    ></v-text-field>

    <v-text-field v-model="password" label="Password" required></v-text-field>

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
    valid: true,
    password: "",
    nameRules: [(v) => !!v || "Name is required"],
    email: "",
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      this.$store.dispatch("toggleRerender");
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
