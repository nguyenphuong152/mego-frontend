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

    <v-dialog transition="dialog-bottom-transition" width="400px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          :disabled="!valid"
          color="black"
          class="mr-4 white--text slogan-3 text-transform-lowercase"
          @click="validate"
        >
          Register
        </v-btn>
      </template>
      <template v-slot:default="dialog">
        <v-card>
          <v-toolbar color="cyan" height="50px" flat dark
            >Congratulation!</v-toolbar
          >
          <v-card-text style="fontSize:16px" class="mt-2 text-start">
            You have successfully registered!
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn text @click="goHome()">Shop now!</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    loading: false,
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
    validate: async function() {
      this.$refs.form.validate();
      await this.$store
        .dispatch("register", {
          name: this.name,
          email: this.email,
          password: this.password,
          phone: this.phone,
          address: this.address,
        })
        .then(
          this.$store.dispatch("setUser", {
            name: this.name,
            email: this.email,
            password: this.password,
            phone: this.phone,
            address: this.address,
          })
        );
    },
    reset() {
      this.$refs.form.reset();
    },
    goHome() {
      this.dialog.value = false;
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style></style>
