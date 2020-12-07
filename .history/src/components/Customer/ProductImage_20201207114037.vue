<template>
  <v-img
  lazy-src="`https://picsum.photos/500/300?image=${this.productID * 8 + 20}`"
  max-height="700"
  max-width="700"
  src="`https://picsum.photos/500/300?image=${this.productID * 8 + 20}`"
></v-img>
</template>

<script>
export default {
  props:["productID"],
 data () {
      return {
      
      }
    },
  created(){
    console.log(this.productID)
  }
}
</script>

<style>

</style>