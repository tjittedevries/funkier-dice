<script setup lang="ts">
import { ref } from "vue";

const theme = ref("dark");
const drawer = ref(false);

function onClick() {
  theme.value = theme.value === "light" ? "dark" : "light";
}
</script>

<template>
  <v-app :theme="theme">
    <v-app-bar color="primary">
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn
        :prepend-icon="
          theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
        "
        @click="onClick"
        >Toggle Theme</v-btn
      >
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <p>Empty</p>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
