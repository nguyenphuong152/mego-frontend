<template>
  <v-container>
    <v-container>
        <v-row>
          <v-col cols="1" sm="10" md="5">
            <v-text-field label="ID" placeholder="1" clearable>
                
            </v-text-field>
          </v-col>
          <v-col cols="1" sm="10" md="5">
            <v-text-field
              label="Name"
              placeholder="tên"
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1" sm="10" md="5">
            <v-text-field
              label="Price"
              placeholder="1 tỉ"
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="1" sm="10" md="5">
            <v-text-field
              label="Color"
              placeholder="blue"
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1" sm="10" md="5">
            <v-text-field
              label="Size"
              placeholder="43"
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="1" sm="10" md="5">
            <v-text-field
              label="Model"
              placeholder="Spring"
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="1" sm="1" md="5">
            <v-text-field
              label="Brand"
              placeholder="Nike"
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style></style>
