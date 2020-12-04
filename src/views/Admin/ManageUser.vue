<template>
  <v-app class="admin">
    <v-main>
      <h1>Manage User</h1>
      <v-content>
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
              <v-combobox label="Status"> Pending </v-combobox>
            </v-col>
            <v-col cols="5" md="1" style="margin-top: 12px">
              <v-btn>
                <v-icon> mdi-magnify </v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <div>
            <v-row class="flex-table">
              <v-col>Orrder ID</v-col>
              <v-col>Purchased On</v-col>
              <v-col>Bill on Name</v-col>
              <v-col>Ship to Name</v-col>
              <v-col>Total ($)</v-col>
              <v-col class="text-start">Status</v-col>
              <v-col class="text-start">Action</v-col>
            </v-row>
          </div>
          <div
            v-for="(OrderList, index) in OrderList"
            :key="index"
            class="flex-table"
          >
            <v-row>
              <v-col>{{ OrderList.id }}</v-col>
              <v-col>{{ OrderList.Date }}</v-col>
              <v-col>{{ OrderList.Buyer }}</v-col>
              <v-col>{{ OrderList.Receiver }}</v-col>
              <v-col>{{ OrderList.Total }}</v-col>
              <v-col class="text-start">{{ OrderList.Status }}</v-col>
              <v-btn color="blue" style="margin: 5px"> View </v-btn>
              <v-btn color="teal" style="margin: 5px"> Ship </v-btn>
            </v-row>
          </div>
        </v-container>
      </v-content>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    Select: {
      Status: [
        { name: "Pending" },
        { name: "Shipping" },
        { name: "Cancelled" },
      ],
    },
    OrderList: [
      {
        id: "ORDER01",
        Date: "1/12/2020",
        Buyer: "Dat",
        Receiver: "Phuong",
        Total: "4.95",
        Status: "Pending",
      },
      {
        id: "ORDER02",
        Date: "1/12/2020",
        Buyer: "Dat",
        Receiver: "Nha",
        Total: "4.95",
        Status: "Shipping",
      },
      {
        id: "ORDER03",
        Date: "1/12/2020",
        Buyer: "Phuong",
        Receiver: "Nha",
        Total: "4.95",
        Status: "Cancelled",
      },
    ],
  }),
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
