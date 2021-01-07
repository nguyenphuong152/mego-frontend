<template>
  <v-app>
    <v-row>
      <v-btn
        color="white"
        class="ma-2 white--text admin;text-start"
        @click="backToUserPage()"
      >
        <v-icon color="black"> mdi-arrow-left </v-icon>
      </v-btn>

      <h1 style="margin-left: 355px">Chi tiết tài khoản</h1>
    </v-row>
    <br />
    <div style="height: 1200px; width: 800px">
      <user-detail :userInfo="this.getUserInfo"/>
    </div>
  </v-app>
</template> 

<script>
import UserDetail from "../../components/Admin/UserDetail.vue";
export default {
  components:{UserDetail},
  data: () => ({
    userInfo:null,
  }),
  computed:{
    getUserInfo:function(){
      return this.$store.state.userInfo;
    }
  },
  methods: {
    backToUserPage() {
      const path = "/admin/manageuser";
      if (this.$route.path !== path) this.$router.push(path);
    },
  },
};
</script>