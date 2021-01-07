<template>
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
</template>

<script>
export default {
  props:["userInfo"],
  data() {
    return{
    }
  },
};
</script>

<style></style>