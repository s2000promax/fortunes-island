import { BetsNumbers } from 'entities/InteractiveTable';

export enum RotatingDirection {
  Сlockwise= 1,
  СounterСlockwise = -1,

}
export interface RouletteSchema {
  isSceneReady: boolean;
  isRotating: boolean;
  rotatingDirection: RotatingDirection;
  previousNumber: BetsNumbers | undefined;
  currentNumber: BetsNumbers | undefined;
  allDrawnNumbers: Array<BetsNumbers>;
}
