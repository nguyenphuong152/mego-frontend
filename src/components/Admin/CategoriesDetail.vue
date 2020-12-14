<template>
  <v-container>
      <div>
        <v-container>
          <v-row>
            <v-btn color="teal" style="margin-left:10px"> Add new gender </v-btn>
          </v-row>
          <v-row>
            <v-container>
              <v-card class="text-start">
                <v-list dense>
                  <a class="admin pl-4 font-weight-black" style="color: teal"
                    >Customers</a
                  >
                  <v-list-item-group color="teal">
                    <v-list-item
                      v-for="(genders_Admin, index) in listGenders"
                      :key="index"
                    >
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="genders_Admin.name"
                          class="text-start"
                        ></v-list-item-title>
                      </v-list-item-content>
                      <div>
                        <v-btn outlined small class="mr-2">
                          <v-icon teal> mdi-delete </v-icon>
                        </v-btn>
                      </div>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-container>
          </v-row>
        </v-container>

        <v-container>
          <v-row>
            <v-btn color="teal" style="margin-left:10px"> Add new type </v-btn>
          </v-row>
          <v-row>
            <v-container>
          <v-card class="text-start">
            <v-list dense>
              <a class="admin pl-4 font-weight-black" style="color: teal"
                >Product types</a
              >
              <v-list-item-group color="teal">
                <v-list-item
                  v-for="(models_Admin, index) in listModels"
                  :key="index"
                >
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="models_Admin.name"
                      class="text-start"
                    ></v-list-item-title>
                  </v-list-item-content>
                  <div>
                    <v-btn outlined small class="mr-2">
                      <v-icon teal> mdi-delete </v-icon>
                    </v-btn>
                  </div>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
          </v-container>
          </v-row>
          
        </v-container>
      </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    listModels() {
      return this.$store.getters.models_Admin;
    },
    listGenders() {
      return this.$store.getters.genders_Admin;
    },
  },
  mounted() {
    this.$store.dispatch("getListGenders"); //get List Gender
    this.$store.dispatch("getListModels"); //, { colID: 1, brandID: "", modelID:"" });
  },
};
</script>
<style>
</style>