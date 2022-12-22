import { ref } from "vue";
import { RollHistory, RollResult } from "@/utils/funky-dice";

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
