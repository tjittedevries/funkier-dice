import { ref } from "vue";
import { defineStore } from "pinia";
import { RollHistory, RollResult } from "@/funky-dice/types";

export const useHistoryStore = defineStore("diceHistory", () => {
  const history = ref<RollHistory[]>([]);

  function addResults(results: RollResult[]) {
    history.value.push({
      results,
    });
  }

  function clearHistory() {
    history.value = [];
  }

  return { history, addResults, clearHistory };
});
