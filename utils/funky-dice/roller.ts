import { getRandomInt } from "../getRandomInt";
import type { DieFace, RollCommand, RollResult } from "./types";

export function roll(commands: RollCommand[]): RollResult[] {
  return commands.map((command) => {
    const rolledFaces: DieFace[] = [];

    for (let i = 0; i < command.amount; i++) {
      const index = getRandomInt(command.die.sides.length);
      const result = command.die.sides[index];
      rolledFaces.push(result);
    }

    return {
      command: { ...command },
      rolls: rolledFaces,
    };
  });
}
