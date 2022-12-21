import type { Set, Die } from "@/utils/funky-dice";
import { getRandomInt } from "@/utils/getRandomInt";

const fateDie = {
  name: "Face d6",
  sides: [
    {
      label: "-1",
      value: -1,
      face: 1,
    },
    {
      label: "-1",
      value: -1,
      face: 2,
    },
    {
      label: "0",
      value: 0,
      face: 3,
    },
    {
      label: "0",
      value: 0,
      face: 4,
    },
    {
      label: "+1",
      value: 1,
      face: 5,
    },
    {
      label: "+1",
      value: 1,
      face: 6,
    },
  ],
};

export function roller(amount = 4) {
  const index = getRandomInt(amount);
  return fateDie.sides[index];
}

console.log("fate roller", roller());

const set: Set = {
  name: "Fate",
  dice: [fateDie],
};

export default set;
