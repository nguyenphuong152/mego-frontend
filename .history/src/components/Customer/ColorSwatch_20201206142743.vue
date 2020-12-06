<template>
  <v-row class="d-flex text-start pt-10">
    <v-col>
      <span class="admin">Please choose your color:</span>
       <v-row class="d-flex justify-space-around pt-4">
        <v-sheet
          v-for="(col, i) in colors"
          :key="i"
          v-bind="{ color: col.color.name }"
          height="36"
          width="36"
          shaped
          @click="
            checkFalse();
            checkTrue(col);
          "
        >
          <v-icon color="white" v-show="col.show">mdi-check</v-icon>
        </v-sheet>
      </v-row>
    </v-col>
    <!-- <v-col>
     
    </v-col> -->
  </v-row>
</template>

<script>
export default {
  props:["productID"],
  data() {
    return {
      apiCol: null,
      text: "",
    };
  },
  methods: {
    checkFalse: function() {
      for (var i = 0; i < this.colors.length; i++) {
        this.colors[i].show = false;
      }
    },
    checkTrue: function(col) {
      col.show = true;
    },
  },
  created() {
    console.log(this.productID)
    this.$store.dispatch('getColorsOfOneProduct',this.productID);
    
    for(var i =0;i<this.colors.length();i++){
      let show =false;
      this.apiCol.push(this.colors[i],show);
    }

    console.log(this.apiCol)
  },
  computed: {
    colors(){
      return this.$store.getters.colorsOfOneProduct;
    }
  }
};
</script>

<style></style>
