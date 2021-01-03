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
        <h1 style="margin-left:355px;">Add Product</h1>
      </v-row>
      <v-row>
        <v-col cols="7">
          <v-img 
          :src="image"
          :key="image"
          lazy-src="public\loading.svg"/>
          <v-file-input
            v-model="file"
            chips
            accept="image/*"
            label="Image"
            @change="onFileChange"
          />
          <v-btn
            @click="clearImage()"
            >Clear</v-btn>
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
                  <v-text-field label="Name" clearable v-model="name"> </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="1" sm="10" md="5">
                  <v-text-field label="price" id="price" clearable v-model="price">
                  </v-text-field>
                </v-col>
                <v-col cols="1" sm="10" md="5">
                  <v-text-field label="Color" clearable v-model="color"> </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="1" sm="10" md="5">
                  <v-text-field label="Size" clearable v-model="size"> </v-text-field>
                </v-col>
                <v-col cols="1" sm="10" md="5">
                  <v-text-field
                    label="Collection"
                    placeholder="Spring/Summer/Fall/Winter"
                    clearable
                    v-model="collection"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="1" sm="1" md="5">
                  <v-text-field label="Brand" clearable v-model="brand"> </v-text-field>
                </v-col>
                <v-col cols="1" sm="1" md="5">
                  <v-text-field label="Model" clearable v-model="model"> </v-text-field>
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
      <div style="margin-left:955px;">
        <v-btn color="teal" style="width:90px" @click="addProduct()">
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
      product:[],
      file: null,
      image: null,
      content2:
        "Featuring the same ripple design of the OG that was inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead. Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colours, it lets you ride in first-class comfort.",
      content1:
        "The fabric and synthetic upper keep the fluid look of the OG while adding comfort and durability.Originally designed for performance running,the full-length Max Air unit adds soft, lasting comfort.The foam midsole feels springy and soft.The rubber outsole adds traction and durability.",
    };
  },
  computed: {},

  methods: {
    clearImage(){
      this.image +=1;
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
    addProduct(){
      console.log(this.name);
      this.product.name = this.name;
      this.product.price = this.price;
      console.log(this.product);
    }
  },

  created: function() {},
};
</script>
