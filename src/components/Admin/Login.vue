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
        @click="handleLogin(email,password)"> Đăng nhập </v-btn>
        <br><br>
        <div v-if="isClicked === true" >
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
      </div>
      </v-form>     
</template>

<script>

export default {
  data() {
    return {  
      show : false,
      email: '',
      password: '',
      isClicked :false,
    };
  },
    methods:{
      handleLogin(email,password){
        this.isClicked = true;
        this.$store.dispatch('handleLogin',{ email, password}).catch(err=>console.log(err));
      },
      clearLocalStorage(){
        localStorage.removeItem("token");
      },
    },
    mounted:function(){
      this.clearLocalStorage();
    }
}
</script>