<template> 
    <v-carousel
      cycle
      height="450"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item 
        v-for="(banner, i) in this.bannerPriorityList" 
        :key="i">
          <v-sheet height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div>
                <v-img :src="`https://mego-backend.herokuapp.com/api/image/banner/${banner.priority}`"
                :lazy-src="`https://mego-backend.herokuapp.com/api/image/banner/${banner.priority}`"
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
</template>



<script>
export default {
  props:["bannerPriorityList"],
  data() {
  },
  // methods:{
  //   getBannerImage:function(prio){
  //     console.log("banner: ",this.$store.state.bannerImageListByPriority[prio]);
  //     return this.$store.state.bannerImageListByPriority[prio];
  //   }
  // },
  // created:function(){
  //     this.bannerPriorityList.forEach(priority => {
  //       console.log("foreach: ",priority);
  //       this.$store.dispatch(`getBannerImageListByPriority`,this.bannerPriorityList.priority);
  //   });
  // }
};
</script>
