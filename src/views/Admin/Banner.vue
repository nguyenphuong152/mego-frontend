<template>
  <v-app class="admin">
    <v-main>
      <h1>Preview</h1>
        <div>
            <v-carousel
      cycle
      height="450"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item 
        v-for="(banner, i) in 2" 
        :key="i">
          <v-sheet height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div>
                <v-img :src="`https://mego-backend.herokuapp.com/api/image/banner/${banner}`"
                :lazy-src="`https://mego-backend.herokuapp.com/api/image/banner/${banner}`"
                max-height="450" max-width="1076"/>
              </div>
                <!-- <div>
                <v-img :src="this.getBannerImage(banner.priority)"
                :lazy-src="`https://mego-backend.herokuapp.com/api/image/banner/${banner.priority}`"
                max-height="450" max-width="1076"/>
              </div> -->
            </v-row>
          </v-sheet>
      </v-carousel-item>
      <!-- <v-carousel-item>
              <v-img :src="`https://picsum.photos/500/300?image=${this.productID * 100}`"
        :lazy-src="`https://picsum.photos/10/6?image=${this.productID *100}`"
        max-height="700" max-width="700"/>
        </v-carousel-item> -->
    </v-carousel>   
            <!-- <BannerDetail/>   -->
            <v-col style="mt-8;margin-left:450px">
                <v-btn elevation="2" style="margin:5px">Add</v-btn>
                <v-btn elevation="2" style="margin:5px">Order</v-btn>
                <v-btn elevation="2" style="margin:5px">Delete</v-btn>         
            </v-col>     
        </div>
    </v-main>
  </v-app>
</template> 

<script>

//import BannerDetail from "../../components/Admin/BannerDetail";
export default {
  data() {
    return {

    };
  },
  computed:{
    getBannerInfo:function() { 
      console.log("view: ",this.$store.state.bannerList);
      return this.$store.state.bannerList;
    },
  },
  created:function(){
    this.$store.dispatch('getBannerList');
  }
};
</script>