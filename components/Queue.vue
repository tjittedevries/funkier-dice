<script setup lang="ts">
import { roll } from "@/utils/funky-dice";
import { useHistoryStore } from "@/store/history";
import { useQueueStore } from "@/store/queue";

const queueStore = useQueueStore();
const historyStore = useHistoryStore();

function rollQueue() {
  const results = roll(queueStore.queue);
  historyStore.addResults(results);
  queueStore.clearQueue();
}
</script>

<template>
  <v-card class="mt-4">
    <v-card-title>Queue</v-card-title>
    <v-card-text>
      <div
        v-for="(item, index) in queueStore.queue"
        :key="`queue-item-${index}`"
      >
        {{ item.amount }} - {{ item.die.name }}
      </div>
    </v-card-text>
    <v-card-text>
      <v-btn color="secondary" @click="rollQueue">Roll</v-btn>
    </v-card-text>
  </v-card>
</template>
