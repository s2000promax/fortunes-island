import React from 'react';
import { RouletteBody } from 'shared/uiKit/3D/RouletteBody';
import { RouletteMovingPart } from 'shared/uiKit/3D/RouletteMovingPart';
import { Vector3 } from '@babylonjs/core';

interface RouletteProps {
  name?: string;
  rotation?: Vector3;
  position?: Vector3;
}

export const Roulette = (props: RouletteProps) => {
  const {
    name = 'Roulette',
    rotation,
    position,
  } = props;
  console.log();
  return (
    <>
      <mesh
        name={name}
        position={position}
      >
        <RouletteBody/>
        <RouletteMovingPart
          rotation={rotation}
        />
      </mesh>
    </>
  );
};
