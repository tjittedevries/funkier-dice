import type { Die, Set } from "@/funky-dice/types";

const challengeDie: Die = {
  name: "Challenge die",
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
    {
      label: "9 Sauron",
      value: 9,
      face: 9,
    },
    {
      label: "10 Gandalf",
      value: 10,
      face: 10,
    },
  ],
};

const successDie: Die = {
  name: "Success die",
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
      label: "6 success",
      value: 6,
      face: 6,
    },
  ],
};

const set: Set = {
  name: "The One Ring",
  dice: [challengeDie, successDie],
};

export default set;
