<template>
  <div class="text-left">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="teal"
          dark
          v-bind="attrs"
          v-on="on"
          class=mr-2
          v-model="selectCate"
        >
          Customer
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(Human, index) in Human"
          :key="index"
        >
          <v-list-item-title>{{ Human.type }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="teal"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Product Types
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(ProductTypes, index) in ProductTypes"
          :key="index"
        >
          <v-list-item-title>  
              {{ ProductTypes.type }}       
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
  
</template>

<script>

</script>