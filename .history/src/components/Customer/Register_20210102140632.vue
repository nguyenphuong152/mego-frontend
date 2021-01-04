<template>
  <v-form ref="form" v-model="valid" lazy-validation class="admin">
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="pass"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show1 ? 'text' : 'password'"
      @click:append="show1 = !show1"
      :rules="[rules.required, rules.min]"
      label="Password"
      required
    ></v-text-field>
    <v-text-field v-model="phone" label="Phone" required></v-text-field>
    <v-text-field v-model="address" label="Address" required></v-text-field>
    <p class="title-shoes">
      Your personal data will be used to support your experience throughout this
      website, to manage access to your account, and for other purposes
      described in our <strong>privacy policy</strong>.
    </p>
    <v-checkbox
      v-model="checkbox"
      :rules="[(v) => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>
    <v-btn
      :disabled="!valid"
      color="black"
      class="mr-4 white--text slogan-3 text-transform-lowercase"
      @click="validate"
    >
      Register
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    password: "Password",
    show1: false,
    valid: true,
    phone: "",
    address: "",
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    pass: "",
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      this.$store.dispatch("register", {
        name: this.name,
        email: this.email,
        password: this.password,
        phone: this.phone,
      });
      setTimeout(() => {
        if (this.$store.getters.isRegister) {
          this.$route.push("Account");
        }
      }, 200);
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style></style>
