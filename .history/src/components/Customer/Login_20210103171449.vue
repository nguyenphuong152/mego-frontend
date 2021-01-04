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
    <v-dialog
      transition="dialog-bottom-transition"
      max-width="400"
      v-model="dialog"
    >
      <template v-slot:default="dialog">
        <v-card>
          <v-toolbar dark color="cyan" height="50px">Login Failed</v-toolbar>
          <v-card-text style="fontSize:16px" class="mt-2 text-start"
            >Please check your email and password!
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn text @click="dialog.value = false">Close</v-btn>
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
      await this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          if (this.$store.getters.getUser.name == null) {
            this.dialog = true;
          }
        });
      this.$router.push({ name: "Home" });
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
