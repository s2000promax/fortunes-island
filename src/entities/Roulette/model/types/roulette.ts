export enum MovingDirection {
  Сlockwise,
  СounterСlockwise

}
export interface RouletteSchema {
  isSceneReady: boolean;
  isMoving: boolean;
  movingDirection?: MovingDirection;
  previousNumber?: number;
  currentNumber?: number;
  allDrawnNumbers?: Array<[number]>;
}
