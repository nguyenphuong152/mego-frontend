<template>   
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="User"
          :counter="10"
          :rules="User"
          label="User"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          hint="At least 8 characters"
          counter
          @click:append="show = !show"
        ></v-text-field>

        <v-btn color="teal"> Log in </v-btn>
      </v-form>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
};
</script>