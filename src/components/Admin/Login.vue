<template>   
      <v-form ref="form"> 
        <v-text-field
          v-model="email"
          label="email"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          label="password"
          counter
          @click:append="show = !show"
        ></v-text-field>

        <v-btn color="teal" 
        @click="handleLogin(email,password)"> Có ngon bấm vào bố mày xem </v-btn>
      </v-form>
</template>

<script>
export default {
  data() {
    return {  
      show : false,
      email: '',
      password: '',
    };
  },
    methods:{
      handleLogin(email,password){
          this.$store.dispatch('handleLogin',{ email:email, password:password});
          console.log('co token', this.$store.getters.getToken);
          this.$router.push('/admin/dashboard');
        },
      clearLocalStorage(){
        localStorage.removeItem("token");
      }
    },
    mounted:function(){
      this.clearLocalStorage();
    }
}
</script>