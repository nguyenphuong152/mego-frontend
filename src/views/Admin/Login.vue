<template>
  <v-app>
    <div style="height:30px;width:600px;margin-left:460px;margin-top:200px;">
      <v-sheet >
      <v-container style="py=8">
        <h1>Login as Admin</h1>
        <div>
            <Login/>      
        </div>
      </v-container>   
    </v-sheet>     
    </div>    
  </v-app>
</template> 

<script>
import Login from "../../components/Admin/Login.vue";
export default {
  data(){
      
    },
  components: {
    Login
  },
    
}
</script>

