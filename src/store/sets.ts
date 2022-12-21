import { ref } from "vue";
import { defineStore } from "pinia";
import type { Set } from "@/funky-dice/types";

import polySet from "@/funky-dice/sets/poly";
import fateSet from "@/funky-dice/sets/fate";
import starWarsSet from "@/funky-dice/sets/star-wars";
import theOneRingSet from "@/funky-dice/sets/the-one-ring";

export const useSetsStore = defineStore("sets", () => {
  const sets = ref<Set[]>([polySet, fateSet, starWarsSet, theOneRingSet]);
  return { sets };
});
