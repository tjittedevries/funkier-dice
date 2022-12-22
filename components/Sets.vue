<script setup lang="ts">
import { useQueueStore } from "@/store/queue";
import { useSetsStore } from "@/store/sets";

const queueStore = useQueueStore();
const setsStore = useSetsStore();
</script>

<template>
  <v-card v-for="(set, index) in setsStore.sets" :key="`set-${index}`">
    <v-card-title>{{ set.name }}</v-card-title>
    <v-card-text>
      <v-btn
        v-for="die in set.dice"
        :key="die.name"
        color="primary"
        class="mr-2 mb-2"
        @click="queueStore.addToQueue(die)"
      >
        {{ die.name }}
      </v-btn>
    </v-card-text>
  </v-card>
</template>
