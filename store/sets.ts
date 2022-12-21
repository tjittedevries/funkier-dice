import { ref } from "vue";
import type { Set } from "@/utils/funky-dice";

import { polySet } from "@/utils/sets";
import { fateSet } from "@/utils/sets";
import { starWarsSet } from "@/utils/sets";
import { theOneRingSet } from "@/utils/sets";

export const useSetsStore = defineStore("sets", () => {
  const sets = ref<Set[]>([polySet, fateSet, starWarsSet, theOneRingSet]);
  return { sets };
});
