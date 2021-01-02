<template>
  <v-container>
    <div>
      <v-container>
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
                      <v-btn
                        outlined
                        small
                        class="mr-2"
                        @click="deleteGender(genders_Admin.id)"
                      >
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
                        v-text="models_Admin.name +` ( `+models_Admin.gender_id+` )`"
                        class="text-start"
                      ></v-list-item-title>
                    </v-list-item-content>
                    <div>
                      <v-btn 
                        outlined 
                        small 
                        class="mr-2" 
                        @click="deleteModel(models_Admin.id)">
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
          <v-container>
            <v-card class="text-start">
              <v-list dense>
                <a class="admin pl-4 font-weight-black" style="color: teal"
                  >Brands</a
                >
                <v-list-item-group color="teal">
                  <v-list-item
                    v-for="(brands, index) in listBrands"
                    :key="index"
                  >
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="brands.name"
                        class="text-start"
                      ></v-list-item-title>
                    </v-list-item-content>
                    <div>
                      <v-btn 
                        outlined 
                        small 
                        class="mr-2" 
                        @click="deleteBrand(brands.id)">
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

      <div style="padding: 10px; margin-top: 20px">
        <v-row>
          <v-col cols="1" sm="10" md="3">
            <v-combobox
              dense
              filled
              outlined
              solo
              v-model="cate"
              :items="items"
              style="width: 200px; margin-top: 10px"
            ></v-combobox>
          </v-col>
          <v-col cols="2" sm="1" md="3">
            <v-text-field
              v-model="input"
              label="Input"
              single-line
              style="width: 250px; margin-bottom: 100px"
            ></v-text-field>
          </v-col>
          <v-col cols="3" sm="1" md="3">
            <v-btn 
              color="teal" 
              style="margin-right: 1000px; margin-top: 10px"
              @click="addCategory()" >
              Add
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  props: ["Gender", "Model", "Brand"],
  data() {
    return {
      cate:'',
      input:'',
      items: ["Gender", "Model", "Brand"],
    };
  },
  methods: {
    deleteGender:function(genderId) {
      console.log("gender:",genderId);
      this.$store.dispatch("deleteGender",{genderId});
    },
    deleteModel: function (modelID) {
      console.log("model: ",modelID);
      this.$store.dispatch("deleteGender",{modelID});
    },
    deleteBrand: function (brandID) {
      console.log("brand: ",brandID);
      this.$store.dispatch("deleteGender",{brandID});
    },
    addCategory(){
      console.log(this.cate);
      console.log(this.input);
      if (this.cate === "Gender")
      {
        this.$store.dispatch("addGender",this.input);
      }else if (this.cate === "Model")
        {
          this.$store.dispatch("addModel",this.input);
        }else
          {
            this.$store.dispatch("addBrand",this.input);
          }
        }
      },
  computed: {
    listModels() {
      return this.$store.getters.models_Admin;
    },
    listGenders() {
      return this.$store.getters.genders_Admin;
    },
    listBrands() {
      return this.$store.getters.getBrandList_Admin;
    },
  },
  mounted() {
    this.$store.dispatch("getListGenders_Admin"); //get List Gender
    this.$store.dispatch("getListModels_Admin"); //, { colID: 1, brandID: "", modelID:"" });
    this.$store.dispatch("getListBrand_Admin");
  },
};
</script>
<styl>
</styl>