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
        @click="handleLogin(email,password)"> Log in </v-btn>
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
          this.$storeAdmin.dispatch('handleLogin',{
          email:email,
          password:password,
        })
        .then(() =>{
          if(localStorage.getItem(`token`))
            this.$router.push('/admin');
        }).catch(err=> console.log(err))
        }
      },
    }

</script>