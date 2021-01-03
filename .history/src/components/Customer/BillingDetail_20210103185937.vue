<template>
  <v-form ref="form" v-model="valid" lazy-validation class="admin">
    <v-text-field
      :v-model="name"
      :rules="nameRules"
      label="Name"
      :value="getUser.name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      :value="getUser.name"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field v-model="country" label="Country" required></v-text-field>
    <v-text-field v-model="company" label="Company"></v-text-field>
    <v-text-field
      v-model="address"
      :value="getUser.address"
      label="Address"
      required
    ></v-text-field>
    <v-text-field
      v-model="phone"
      label="Phone"
      :value="getUser.phone"
      required
    ></v-text-field>
    <br />
    <v-checkbox
      v-model="checkbox"
      label="Do you want to create an account?"
      required
    ></v-checkbox>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Name is required"],
    email: "",
    country: "",
    company: "",
    address: "",
    phone: "",
    emailRules: [(v) => !!v || "E-mail is required"],

    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
  computed: {
    getUser() {
      console.log("buiil", this.$store.getters.getUser.email);
      return this.$store.getters.getUser;
    },
  },
};
</script>

<style></style>
