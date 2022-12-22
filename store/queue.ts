import { ref } from "vue";
import { Die, RollCommand } from "@/utils/funky-dice";

export const useQueueStore = defineStore("diceQueue", () => {
  const queue = ref<RollCommand[]>([]);

  function clearQueue() {
    queue.value = [];
  }

  function addToQueue(die: Die) {
    const found = queue.value.find((command) => command.die.name == die.name);

    if (found) {
      found.amount += 1;
      return;
    }

    const command: RollCommand = {
      amount: 1,
      die,
    };
    queue.value.push(command);
  }

  return { queue, addToQueue, clearQueue };
});
