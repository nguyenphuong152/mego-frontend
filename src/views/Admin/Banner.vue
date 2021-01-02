<template>
  <v-app class="admin">
    <v-main>
      <h1>Preview</h1>
        <div>
            <Banner :bannerPriorityList="this.getBannerInfo"/>  
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
import Banner from "../../components/Admin/Banner";
//import BannerDetail from "../../components/Admin/BannerDetail";
export default {
  components: {
    Banner,
    //BannerDetail,
  },
  data() {
    return {
      bannerPriority:null,
    };
  },
  computed:{
    getBannerInfo:function() { 
      return this.$store.state.bannerList;
    },
  },
  created:function(){
    this.$store.dispatch('getBannerList');
  }
};
</script>