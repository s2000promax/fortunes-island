import { BetsNumbers } from 'entities/InteractiveTable';

export enum MovingDirection {
  Сlockwise,
  СounterСlockwise

}
export interface RouletteSchema {
  isSceneReady: boolean;
  isMoving: boolean;
  movingDirection: MovingDirection;
  previousNumber: BetsNumbers | undefined;
  currentNumber: BetsNumbers | undefined;
  allDrawnNumbers: Array<[BetsNumbers]>;
}
