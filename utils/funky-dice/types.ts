export interface DieFace {
  label: string;
  value: number;
  face: number;
}

export interface Set {
  name: string;
  dice: Die[];
}

export interface Die {
  name: string;
  sides: DieFace[];
}

export interface RollCommand {
  amount: number;
  die: Die;
}

export interface RollResult {
  command: RollCommand;
  rolls: DieFace[];
}

export interface RollHistory {
  results: RollResult[];
}
