<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="headline">
        <v-btn text :to="{ name: 'Home' }">
          Vue sandbox
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn text :to="{ name: 'About' }">
        About
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container fluid class="pa-6">
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>
