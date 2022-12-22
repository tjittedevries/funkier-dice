<script setup lang="ts">
import { useHistoryStore } from "@/store/history";

const historyStore = useHistoryStore();
</script>

<template>
  <v-card class="mt-4">
    <v-card-title>History</v-card-title>
    <v-card-text>
      <div
        v-for="(line, index) in historyStore.history"
        :key="`history-line-${index}`"
        class="my-4"
      >
        <div
          v-for="(result, index) in line.results"
          :key="`history-line-result-${index}`"
        >
          <h4 class="text-h5">
            {{ result.command.amount }} {{ result.command.die.name }}
          </h4>
          <p>
            <span
              class="mr-2"
              v-for="(roll, index) in result.rolls"
              :key="`history-line-roll-${index}`"
            >
              {{ roll.value }} - {{ roll.label }}
            </span>
          </p>
        </div>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="historyStore.clearHistory">clear history</v-btn>
    </v-card-actions>
  </v-card>
</template>
