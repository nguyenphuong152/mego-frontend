<template>
  <v-app class="admin">
    <v-main>
      <h1>Order List</h1>
        <v-container width="100%">
          <v-row>
            <v-col cols="1" sm="10" md="3">
              <v-text-field size="1" label="ID"></v-text-field>
            </v-col>
            <v-col cols="2" sm="1" md="3">
              <v-text-field label="From"></v-text-field>
            </v-col>
            <v-col cols="3" sm="1" md="3">
              <v-text-field label="To"></v-text-field>
            </v-col>
            <v-col cols="4" sm="1" md="2">
              <v-combobox 
                label="Status"
                :items="Status"
                ></v-combobox>
            </v-col>
            <v-col cols="5" md="1" style="margin-top: 12px">
              <v-btn color="teal">
                <v-icon> mdi-magnify </v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <div>
            <v-row class="flex-table">
              <v-col>Order ID</v-col>
              <v-col>Buyer ID</v-col>
              <v-col>Address</v-col>
              <v-col>Purchase On</v-col>
              <v-col>Total ($)</v-col>
              <v-col class="text-start">Status</v-col>
              <v-col class="text-start">Action</v-col>
            </v-row>
          </div>
          <div
            v-for="(orders,index) in getOrderList()"
            :key ="index"
            class="flex-table"
          >
            <v-row>
              <v-col>{{ orders.id}}</v-col>
              <v-col>{{ orders.user_id }}</v-col>
              <v-col>{{ orders.address }}</v-col>
              <v-col>{{ orders.created_at }}</v-col>             
              <v-col>{{ orders.Total }}</v-col>
              <v-col class="text-start">{{ orders.status }}</v-col>
              <v-btn color="blue" style="margin: 5px"> View </v-btn>
              <v-btn color="teal" style="margin: 5px"> Ship </v-btn>
            </v-row>
          </div>
        </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
      Status: [
        "Pending" ,
        "Shipping" ,
        "Cancelled" ,
      ],
  }),
  methods:{
    getOrderList:function(){
      console.log('test:',this.$store.state.orderList);
      return this.$store.state.orderList;
    }
  },
  created:function(){
    this.$store.dispatch('getOrderList_Admin');
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
.modi-table {
  display: grid;
  grid-template-columns: repeat(auto-fill, 33%);
  padding: 1px;
  border-bottom: 1px black solid;
  &:nth-of-type(2n) {
    background-color: #dedede;
  }
}
</style>
