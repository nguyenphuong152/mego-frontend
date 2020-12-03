<template>
  <v-app class="admin">
    <v-main>
      <h1>Catagories Manager</h1>
      <div>
        <v-container>
          <v-card class="text-start">
            <v-list dense>
              <a class="admin pl-4 font-weight-black" style="color:teal;"
                >Customers</a>
              <v-list-item-group v-model="selectedItem" color="teal">
                <v-list-item v-for="(Catogories, i) in Catogories" :key="i">
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="Catogories.name"
                      class="text-start"
                    ></v-list-item-title>
                  </v-list-item-content>
                  <div>
                    <v-btn outlined = 0 small class="mr-2">
                      <v-icon teal>
                        mdi-plus
                      </v-icon>
                    </v-btn>
                    <v-btn outlined = 0 small class="mr-2">
                      <v-icon teal>
                        mdi-wrench
                      </v-icon>
                    </v-btn>
                    <v-btn outlined = 0 small class="mr-2">
                      <v-icon teal>
                        mdi-delete
                      </v-icon>
                    </v-btn>
                  </div>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
          </v-container>
          <v-container>          
          <v-card class="text-start">
            <v-list dense>
              <a class="admin pl-4 font-weight-black" style="color:teal;"
                >Product types</a>
              <v-list-item-group v-model="selectedProductItem" color="teal">
                <v-list-item v-for="(ProdcutTypes, i) in ProdcutTypes" :key="i">
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="ProdcutTypes.name"
                      class="text-start"
                    ></v-list-item-title>
                  </v-list-item-content>
                  <div>
                    <v-btn outlined = 0 small class="mr-2">
                      <v-icon teal>
                        mdi-plus
                      </v-icon>
                    </v-btn>
                    <v-btn outlined = 0 small class="mr-2">
                      <v-icon teal>
                        mdi-wrench
                      </v-icon>
                    </v-btn>
                    <v-btn outlined = 0 small class="mr-2">
                      <v-icon teal>
                        mdi-delete
                      </v-icon>
                    </v-btn>
                  </div>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () =>  ({ 
    selectedItem: -1,
    Catogories: [{ name: "Men" }, { name: "Women" }, { name: "Kids" }],

    selectedProductItem: -1,
    ProdcutTypes: [{ name: "Sneakers" }, { name: "Basketball" }, { name: "Soccers" }, { name: "Running" }, { name: "Casual" }],
}),
}
</script>

<style>

</style>
