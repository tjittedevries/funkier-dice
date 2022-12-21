import type { Set, Die } from "@/funky-dice/types";

export const polyD4: Die = {
  name: "d4",
  sides: [
    {
      label: "1",
      value: 1,
      face: 1,
    },
    {
      label: "2",
      value: 2,
      face: 2,
    },
    {
      label: "3",
      value: 3,
      face: 3,
    },
    {
      label: "4",
      value: 4,
      face: 4,
    },
  ],
};

export const polyD6: Die = {
  name: "d6",
  sides: [
    {
      label: "1",
      value: 1,
      face: 1,
    },
    {
      label: "2",
      value: 2,
      face: 2,
    },
    {
      label: "3",
      value: 3,
      face: 3,
    },
    {
      label: "4",
      value: 4,
      face: 4,
    },
    {
      label: "5",
      value: 5,
      face: 5,
    },
    {
      label: "6",
      value: 6,
      face: 6,
    },
  ],
};

export const polyD8: Die = {
  name: "d8",
  sides: [
    {
      label: "1",
      value: 1,
      face: 1,
    },
    {
      label: "2",
      value: 2,
      face: 2,
    },
    {
      label: "3",
      value: 3,
      face: 3,
    },
    {
      label: "4",
      value: 4,
      face: 4,
    },
    {
      label: "5",
      value: 5,
      face: 5,
    },
    {
      label: "6",
      value: 6,
      face: 6,
    },
    {
      label: "7",
      value: 7,
      face: 7,
    },
    {
      label: "8",
      value: 8,
      face: 8,
    },
  ],
};

const set: Set = {
  name: "Poly",
  dice: [polyD4, polyD6, polyD8],
};

export default set;
