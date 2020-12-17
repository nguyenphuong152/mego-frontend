<template>
  <v-container class="text-start">
<<<<<<< HEAD
    <strong class="product-detail--price font-weight-medium"
      >View Product Details</strong
    >
    <br />
    <br>
    <span class="admin"> {{ this.content }} </span>
    <br>
    <br>
    <span class="admin">{{content1}}</span>
    <br>
    <br>
    <span class="admin">{{content2}}</span>
=======
    <div style="margin-left:400px">
      <strong class="product-detail--price font-weight-mediump">
        View Product Details
      </strong>
    </div>
      <div  :key="componentKey" style="margin-top:20px;">
        <v-textarea
          solo
          name="input-7-4"
          v-model="content"

        ></v-textarea>
      </div>  
      <!-- <div v-else :key="componentKey">
        <v-textarea
          solo
          name="input-7-4"
          v-model="content"
          @dblclick="modifyDescription()"
        ></v-textarea>
        <v-btn>ok</v-btn>
      </div> -->
>>>>>>> main
  </v-container>
</template>

<script>
<<<<<<< HEAD
export default {
  props:['content'],
  data() {
    return {
      content2:
        "Featuring the same ripple design of the OG that was inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead. Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colours, it lets you ride in first-class comfort.",
      content1: "The fabric and synthetic upper keep the fluid look of the OG while adding comfort and durability.Originally designed for performance running,the full-length Max Air unit adds soft, lasting comfort.The foam midsole feels springy and soft.The rubber outsole adds traction and durability."}
  },
};
</script>

<style></style>
=======

export default {
  data:()=>({
        componentKey: 0,
        modify : false,
        // result: [];
        // delay: 700;
        // clicks: 0;
        // timer: null;
        content: 
        'The fabric and synthetic upper keep the fluid look of the OG while adding comfort and durability. '+
          'Originally designed for performance running, the full-length Max Air unit adds soft, lasting comfort. '+
          'The foam midsole feels springy and soft.The rubber outsole adds traction and durability. '+
          'Featuring the same ripple design of the OG that was inspired by Japanese bullet trains, the Nike Air Max 97 '+
          'lets you push your style full-speed ahead. Taking the revolutionary full-length Nike Air '+ 
          'unit that shook up the running world and adding fresh colours, it lets you ride in first-class comfort.'
  }),
  methods:{
    modifyDescription() {
      this.modify = !this.modify;
      console.log(this.modify);
      this.componentKey+=1;
      return this.modify;
    }
  }
}
</script>

<style></style>
>>>>>>> main
