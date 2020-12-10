<template>
  <v-app class="admin">
    <v-main>
        Form Đăng kí
      <AdminRegister/>
    </v-main>
  </v-app>
</template> 

<script>
import AdminRegister from "../../components/Admin/AdminRegister";

export default {
  components: {
    AdminRegister
  },

  data() {

  },
};
</script>