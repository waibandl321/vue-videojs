<template>
  <v-app id="inspire">
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AppBar from './components/AppBar.vue'
</script>
