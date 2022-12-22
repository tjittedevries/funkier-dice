import type { Die, Set } from "@/utils/funky-dice";

const boostDie: Die = {
  name: "Boost die (d6)",
  sides: [
    {
      label: "<blank>",
      value: 1,
      face: 1,
    },
    {
      label: "<blank>",
      value: 2,
      face: 2,
    },
    {
      label: "<success>",
      value: 3,
      face: 3,
    },
    {
      label: "<success> + <advantage>",
      value: 4,
      face: 4,
    },
    {
      label: "<advantage> + <advantage>",
      value: 5,
      face: 5,
    },
    {
      label: "<advantage>",
      value: 6,
      face: 6,
    },
  ],
};

const setbackDie: Die = {
  name: "Setback die (d6)",
  sides: [
    {
      label: "<blank>",
      value: 1,
      face: 1,
    },
    {
      label: "<blank>",
      value: 2,
      face: 2,
    },
    {
      label: "<failure>",
      value: 3,
      face: 3,
    },
    {
      label: "<failure>",
      value: 4,
      face: 4,
    },
    {
      label: "<threat>",
      value: 5,
      face: 5,
    },
    {
      label: "<threat>",
      value: 6,
      face: 6,
    },
  ],
};

const abilityDie: Die = {
  name: "Ability die (d8)",
  sides: [
    {
      label: "<blank>",
      value: 1,
      face: 1,
    },
    {
      label: "<success>",
      value: 2,
      face: 2,
    },
    {
      label: "<success>",
      value: 3,
      face: 3,
    },
    {
      label: "<success> + <success>",
      value: 4,
      face: 4,
    },
    {
      label: "<advantage>",
      value: 5,
      face: 5,
    },
    {
      label: "<advantage>",
      value: 6,
      face: 6,
    },
    {
      label: "<success> + <advantage>",
      value: 7,
      face: 7,
    },
    {
      label: "<advantage> + <advantage>",
      value: 8,
      face: 8,
    },
  ],
};

const difficultyDie: Die = {
  name: "Difficulty die (d8)",
  sides: [
    {
      label: "<blank>",
      value: 1,
      face: 1,
    },
    {
      label: "<failure>",
      value: 2,
      face: 2,
    },
    {
      label: "<failure> + <failure>",
      value: 3,
      face: 3,
    },
    {
      label: "<threat>",
      value: 4,
      face: 4,
    },
    {
      label: "<threat>",
      value: 5,
      face: 5,
    },
    {
      label: "<threat>",
      value: 6,
      face: 6,
    },
    {
      label: "<threat> + <threat>",
      value: 7,
      face: 7,
    },
    {
      label: "<failure> + <threat>",
      value: 8,
      face: 8,
    },
  ],
};

const proficiencyDie: Die = {
  name: "Proficiency die (d12)",
  sides: [
    {
      label: "<blank>",
      value: 1,
      face: 1,
    },
    {
      label: "<success>",
      value: 2,
      face: 2,
    },
    {
      label: "<success>",
      value: 3,
      face: 3,
    },
    {
      label: "<success> + <success>",
      value: 4,
      face: 4,
    },
    {
      label: "<success> + <success>",
      value: 5,
      face: 5,
    },
    {
      label: "<advantage>",
      value: 6,
      face: 6,
    },
    {
      label: "<success> + <advantage>",
      value: 7,
      face: 7,
    },
    {
      label: "<success> + <advantage>",
      value: 8,
      face: 8,
    },
    {
      label: "<success> + <advantage>",
      value: 9,
      face: 9,
    },
    {
      label: "<advantage> + <advantage>",
      value: 10,
      face: 10,
    },
    {
      label: "<advantage> + <advantage>",
      value: 11,
      face: 11,
    },
    {
      label: "<triumph>",
      value: 12,
      face: 12,
    },
  ],
};

const challengeDie: Die = {
  name: "Challenge die (d12)",
  sides: [
    {
      label: "<blank>",
      value: 1,
      face: 1,
    },
    {
      label: "<failure>",
      value: 2,
      face: 2,
    },
    {
      label: "<failure>",
      value: 3,
      face: 3,
    },
    {
      label: "<failure> + <failure>",
      value: 4,
      face: 4,
    },
    {
      label: "<failure> + <failure>",
      value: 5,
      face: 5,
    },
    {
      label: "<threat>",
      value: 6,
      face: 6,
    },
    {
      label: "<threat>",
      value: 7,
      face: 7,
    },
    {
      label: "<failure> + <threat>",
      value: 8,
      face: 8,
    },
    {
      label: "<failure> + <threat>",
      value: 9,
      face: 9,
    },
    {
      label: "<threat> + <threat>",
      value: 10,
      face: 10,
    },
    {
      label: "<threat> + <threat>",
      value: 11,
      face: 11,
    },
    {
      label: "<despair>",
      value: 12,
      face: 12,
    },
  ],
};

const forceDie: Die = {
  name: "Force die (d12)",
  sides: [
    {
      label: "<dark>",
      value: 1,
      face: 1,
    },
    {
      label: "<dark>",
      value: 2,
      face: 2,
    },
    {
      label: "<dark>",
      value: 3,
      face: 3,
    },
    {
      label: "<dark>",
      value: 4,
      face: 4,
    },
    {
      label: "<dark>",
      value: 5,
      face: 5,
    },
    {
      label: "<dark>",
      value: 6,
      face: 6,
    },
    {
      label: "<dark> + <dark>",
      value: 7,
      face: 7,
    },
    {
      label: "<light>",
      value: 8,
      face: 8,
    },
    {
      label: "<light>",
      value: 9,
      face: 9,
    },
    {
      label: "<light> + <light>",
      value: 10,
      face: 10,
    },
    {
      label: "<light> + <light>",
      value: 11,
      face: 11,
    },
    {
      label: "<light> + <light>",
      value: 12,
      face: 12,
    },
  ],
};

const set: Set = {
  name: "Star Wars",
  dice: [
    boostDie,
    setbackDie,
    abilityDie,
    difficultyDie,
    proficiencyDie,
    challengeDie,
    forceDie,
  ],
};

export default set;
