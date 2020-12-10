<!--<template>
  <v-app class="admin">
    <v-main>
      <AdminLogin/>
    </v-main>
  </v-app>
</template> 

<script>
import AdminLogin from "../../components/Admin/AdminLogin";

export default {
  components: {
    AdminLogin
  },

  data() {

  },
};
</script>-->
<template>
  <v-app>
    <div style="height:30px;width:600px;margin-left:460px;margin-top:200px;">
      <v-sheet >
      <v-container style="py=8">
        <h1>Login as Admin</h1>
        <div>
            <Login/>      
        </div>
        <div style="padding:5px;margin-left:510px;">
            <a href="/adminregister"><h4 style="color:teal">Đăng kí</h4></a>
            
        </div>
      </v-container>   
    </v-sheet>     
    </div>    
  </v-app>
</template> 

<script>
import Login from "../../components/Admin/Login.vue";
export default {
  components: {
    Login
  }
}
</script>

