<template>
  <v-container>
      <v-card class="text-start" >
           <v-list dense >
      <a class="admin pl-4 font-weight-black" style="color:teal;">Customer  </a>
      <v-list-item-group
        v-model="selectedItem"
        color="teal"
      >
        <v-list-item
          v-for="(Catogories, i) in Catogories"
          :key="i"
        >
         <v-list-item-content>
            <v-list-item-title v-text="Catogories.name" class="text-start"></v-list-item-title>
          </v-list-item-content>
          <div>
            <v-btn style="margin:3px">
              <v-icon teal >
                mdi-plus
              </v-icon>
            </v-btn>
            <v-btn style="margin:3px" >
              <v-icon teal >
                mdi-wrench
              </v-icon>
            </v-btn> 
            <v-btn style="margin:3px">
              <v-icon teal >
                mdi-delete
              </v-icon>
            </v-btn>   
          </div>
        </v-list-item>
      </v-list-item-group>
    </v-list>
      </v-card>
  </v-container>
</template>

<script>
export default {
    data: () => ({
      selectedItem: 0,
      Catogories: [
        { name: "Men"},
        { name: "Women"},
        { name: "Kids" },
    ],
    }),
}
</script>

<style>

</style>