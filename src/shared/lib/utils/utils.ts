import { Animation, Mesh, Nullable, Scene, Vector3 } from '@babylonjs/core';
import { MutableRefObject } from 'react';
import { RotatingDirection } from '@/entities/Roulette/model/types/roulette';
import { BetsIdTypes, CurrentBetsPositions } from '@/entities/InteractiveTable';

export function formatDrawnNumber(str: string) {

  return str.split('').map(s => {
    if (!isNaN(Number(s))) return s;
  }).join('');
}
export function getX(angel: number = 1, radius: number = 1) {
  return radius * Math.cos(angel);
}

export function getY(angel: number = 1, radius: number = 1) {
  return radius * Math.sin(angel);
}

export function getSlideUpAnimation(position: Vector3, offsetY: number) {
  const frameRate = 60;
  const { y } = position;

  const keys = [
    {
      frame: 0,
      value: y,
    },
    {
      frame: frameRate * 50,
      value: y + (offsetY * 50),
    },
  ];

  const animation = new Animation(
    'animation',
    'rotation.y',
    frameRate,
    Animation.ANIMATIONTYPE_FLOAT,
    Animation.ANIMATIONLOOPMODE_CONSTANT,
  );
  animation.blendingSpeed = 10;
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
      3000,

    );
  }
};

export const getCoordinates = (currentBets: Array<CurrentBetsPositions>, bet: BetsIdTypes): Vector3 => {
  return currentBets[currentBets.findIndex(tableBet => tableBet.bet === bet)].pos;
};
