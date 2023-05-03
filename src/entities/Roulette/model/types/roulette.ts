import { BetsIdTypes, ChipsNominals } from '@/entities/InteractiveTable';
import { Vector3 } from '@babylonjs/core';

export enum RotatingDirection {
  Сlockwise= 1,
  СounterСlockwise = -1,

}

export type CurrentBet = {
  bet: BetsIdTypes;
  chip: ChipsNominals;
}

export interface RouletteSchema {
  isSceneReady: boolean;
  isRotating: boolean;
  rotatingDirection: RotatingDirection;
  currentBets: Array<CurrentBet>;
  currentNumber: string | undefined;
  temporaryNumbers: Array<string>;
  allDrawnNumbers: Array<{ drawnNumber: string; status: boolean }>;
  currentWinDelta: number;
}

export enum CellNumber {
  Zero,
  One,
  Two,
  Tree,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Eleven,
  Twelve,
  Thirteen,
  Fourteen,
  Fiveteen,
  Sixteen,
  Seventeen,
  Eighteen,
  Nineteen,
  Twenty,
  TwentyOne,
  TwentyTwo,
  TwentyTree,
  TwentyFour,
  TwentyFive,
  TwentySix,
  TwentySeven,
  TwentyEight,
  TwentyNine,
  Thirty,
  ThirtyOne,
  ThirtyTwo,
  ThirtyThree,
  ThirtyFour,
  ThirtyFive,
  ThirtySix,
  DoubleZero
}

export type RouletteCells = {
  number: CellNumber;
  row: number;
  column: number;
  pos: Vector3;
  rot: number;
}
