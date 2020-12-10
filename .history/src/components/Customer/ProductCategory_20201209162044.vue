<template>
<v-container text-start>
    <div class="title-collection">Product Categories</div>
<v-list shaped>
      <v-list-item-group v-model="model" color="cyan">
        <v-list-item
          v-for="(item, i) in getCollections"
          :key="i"
          @click="viewProductByCategory(item)"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.name" class="title-shoes"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
</v-container>
</template>

<script>
export default {
props:['gender'],
data: () => ({
      model: 5,
    }),
  computed: {
    getCollections() {
      return this.$store.state.collections;
    }
  },
   mounted() {
    this.$store.dispatch("getCollections",this.gender);
  },
  methods:{
    viewProductByCategory(item)
    {
      this.$emit("sendCategory",item.id)
       this.$forceUpdate()
    }
  },
  created(){
    this.$emit("sendCategory",11)
  }
}
</script>

<style>

</style>