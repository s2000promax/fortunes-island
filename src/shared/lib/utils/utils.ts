import { Animation, Mesh, Nullable, Scene, Vector3 } from '@babylonjs/core';
import { MutableRefObject } from 'react';
import { RotatingDirection } from 'entities/Roulette/model/types/roulette';
import { BetsIdTypes, ChipsNominals, CurrentBetsPositions } from 'entities/InteractiveTable';

export function getX(angel: number = 1, radius: number = 1) {
  return radius * Math.cos(angel);
}

export function getY(angel: number = 1, radius: number = 1) {
  return radius * Math.sin(angel);
}

export function getSlideUpAnimation(position: Vector3, offsetY: number) {
  const { y } = position;

  const keys = [
    {
      frame: 0,
      value: y,
    },
    {
      frame: 120,
      value: y + offsetY,
    },
  ];

  const animation = new Animation('animation', 'rotation.y', 30, 0, 0);
  animation.setKeys(keys);

  return [animation];
}

export function playAnimation(
  refMesh: MutableRefObject<Nullable<Mesh>>,
  scene: Scene,
  direction: RotatingDirection,
  offsetY: number,
  position: Vector3,
) {
  if (refMesh.current) {
    const animations = getSlideUpAnimation(position, offsetY * direction);
    const animatable = scene!.beginDirectAnimation(
      refMesh.current,
      animations,
      0,
      360,
      true,
    );
  }
};

export const getCoordinates = (currentBets: Array<CurrentBetsPositions>, bet: BetsIdTypes): Vector3 => {
  return currentBets[currentBets.findIndex(tableBet => tableBet.bet === bet)].pos;
};

