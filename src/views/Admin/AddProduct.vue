<template>
  <v-main>
    <v-app>
      <v-row>
        <v-btn
          color="white"
          class="ma-2 white--text admin;text-start"
          @click="backToProductPage()"
        >
          <v-icon color="black"> mdi-arrow-left </v-icon>
        </v-btn>
        <h1 style="margin-left: 355px">Add Product</h1>
      </v-row>
      <v-row>
        <v-col cols="7">
          <v-img :src="image" :key="image" lazy-src="public\loading.svg" />
          <v-file-input
            v-model="file"
            chips
            accept="image/*"
            label="Image"
            @change="onFileChange"
          />
          <v-btn @click="clearImage()">Clear</v-btn>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
          <v-form>
            <v-container>
              <v-row>
                <!-- <v-col cols="1" sm="10" md="5">
                  <v-text-field label="ID" clearable v-model="name">
                  </v-text-field>
                </v-col> -->
                <v-col cols="1" sm="10" md="5">
                  <v-text-field label="Name" clearable v-model="name">
                  </v-text-field>
                </v-col>
                <v-col cols="1" sm="10" md="5">
                  <v-text-field
                    label="price"
                    id="price"
                    clearable
                    v-model="price"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="1" sm="10" md="5">
                  <select
                    style="
                      font-size: 16px;
                      width: 150px;
                      height: 35px;
                    "
                  >
                    <optgroup label="Model">
                      <option
                        v-for="(model, index) in this.getModelList"
                        :key="index"
                        style="border: 1px solid #e5e5e5; padding: 10px"
                      >
                        <v-text style="padding: 10px">
                          {{ model.name }}{{model.gender.id}}
                        </v-text>
                      </option>
                    </optgroup>
                  </select>
                </v-col>
                <v-col cols="1" sm="1" md="5">
                  <select
                    style="
                      font-size: 16px;
                      width: 150px;
                      height: 35px;
                    "
                  >
                    <optgroup label="Brand">
                      <option
                        v-for="(brand, index) in this.getBrandList"
                        :key="index"
                      >
                        <v-text style="padding: 10px">
                          {{ brand.name }}
                        </v-text>
                      </option>
                    </optgroup>
                  </select>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-container class="text-start">
          <strong class="product-detail--price font-weight-medium"
            >View Product Description</strong
          >
          <v-text-field> </v-text-field>
        </v-container>
      </v-row>
      <div style="margin-left: 955px">
        <v-btn color="teal" style="width: 90px" @click="addProduct()">
          Save
        </v-btn>
      </div>
    </v-app>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      product: [],
      file: null,
      image: null,
      content2:
        "Featuring the same ripple design of the OG that was inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead. Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colours, it lets you ride in first-class comfort.",
      content1:
        "The fabric and synthetic upper keep the fluid look of the OG while adding comfort and durability.Originally designed for performance running,the full-length Max Air unit adds soft, lasting comfort.The foam midsole feels springy and soft.The rubber outsole adds traction and durability.",
    };
  },
  methods: {
    clearImage() {
      this.image += 1;
    },
    backToProductPage() {
      const path = "/admin/product";
      if (this.$route.path !== path) this.$router.push(path);
    },
    onFileChange() {
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (e) => {
        this.image = e.target.result;
      };
    },
    addProduct() {
      this.product.name = this.name;
      this.product.price = this.price;
    },
  },
  computed: {
    getBrandList() {
      return this.$store.state.brandList;
    },
    getModelList() {
      return this.$store.state.models_Admin;
    },
  },
  created: function () {
    this.$store.dispatch("getListBrand_Admin");
    this.$store.dispatch("getListModels_Admin");
  },
};
</script>
