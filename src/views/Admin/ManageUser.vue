<template>
  <v-app class="admin">
    <v-main>
      <h1>Manage User</h1>
        <v-container width="100%">
          <v-row>
            <v-col cols="1" sm="10" md="3">
              <v-text-field size="1" label="ID" v-model="searchID"></v-text-field>
            </v-col>
            <v-col cols="5" md="1" style="margin-top: 12px">
              <v-btn color="teal" @click="goDetail(searchID)">
                <v-icon> mdi-magnify </v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <div>
            <v-row class="flex-table">
              <v-col>ID</v-col>
              <v-col>Name</v-col>
              <v-col>Email</v-col>
              <v-col>Phone No</v-col>
              <v-col>Create At</v-col>
              <v-col class="text-start">Action</v-col>
            </v-row>
          </div>
          <div
            v-for="(User, index) in getUserList()"
            :key="index"
            class="flex-table"
          >
            <v-row>
              <v-col>{{ User.id }}</v-col>
              <v-col>{{ User.name }}</v-col>
              <v-col>{{ User.email }}</v-col>
              <v-col>{{ User.phone }}</v-col>
              <v-col>{{ User.create_at }}</v-col>
              <v-col class="text-start">{{ User.Status }}</v-col>
              <v-btn
                color="orange"
                style="margin: 5px"
                @click="goDetail(User.id)"
              > Update </v-btn>
              <v-btn color="red" style="margin: 5px"> Delete </v-btn>
            </v-row>
          </div>
        </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    return:{
      searchID:null,
    }
  }),
  methods:{
  goDetail: function(id) {
    this.$router.push({ name: "UserDetailAdmin", params: { id }});
  },
    getUserList:function(){
      return this.$store.state.userList;
    }
  },
  created:function(){
    this.$store.dispatch('getUserList_Admin');
  }
};
</script>

<style lang="scss" scoped>
.flex-table {
  border-bottom: 1px black solid;
  &:nth-of-type(2n) {
    background-color: #dedede;
  }
}

</style>
