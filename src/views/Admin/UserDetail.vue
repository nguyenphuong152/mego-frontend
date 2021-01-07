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
      <v-card>
        <v-row>
          <v-col cols="1" sm="1" md="3" style="margin-top: 22px"> Name: </v-col>
          <v-col cols="1" sm="1" md="4">
            <v-text-field 
              clearable
              v-model="this.userInfo.name"
              ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1" sm="1" md="3" style="margin-top: 22px">
            Phone:
          </v-col>
          <v-col cols="1" sm="1" md="4">
            <v-text-field
             clearable
             v-model="this.userInfo.phone"> </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1" sm="1" md="3" style="margin-top: 22px">
            Email:
          </v-col>
          <v-col cols="1" sm="1" md="4">
            <v-text-field
             clearable
             v-model="this.userInfo.email"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-btn
            color="orange"
            elevation="1"
            style="width: 150px; margin-left: 480px;"
            >Update</v-btn
          >
          <v-btn color="red" elevation="1" style="width: 150px;margin-left:5px">Delete</v-btn>
        </v-row>
        <br />
      </v-card>
    </div>
  </v-app>
</template> 

<script>
export default {
  data: () => ({
    return:{
      id:null,
      userInfo:null,
    }
  }),
  methods: {
    backToUserPage() {
      const path = "/admin/manageuser";
      if (this.$route.path !== path) this.$router.push(path);
    },
  },
  created:function(){
    this.userInfo = this.$store.state.userInfo;
    console.log("lay tu state: ", this.$store.state.userInfo);
    console.log("data: ", this.userInfo);
  }
};
</script>