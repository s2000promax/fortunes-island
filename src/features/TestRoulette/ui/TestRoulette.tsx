import React, { MutableRefObject, useRef } from 'react';
import '@babylonjs/core/Physics/physicsEngineComponent';
import { AmmoJSPlugin } from '@babylonjs/core/Physics/Plugins/ammoJSPlugin';
import Ammo from 'ammojs-typed';
import { useScene } from 'react-babylonjs';
import { Mesh, Nullable, Scene, Vector3 } from '@babylonjs/core';
import { Ball } from 'shared/uiKit/3D/Ball';
import { RouletteCell } from 'shared/uiKit/3D/RouletteCell';
import { CellNumber } from 'shared/uiKit/3D/RouletteCell/model/CellsTypes';
import { RouletteMovingPart } from 'shared/uiKit/3D/RouletteMovingPart';
import { RotatingDirection } from 'entities/Roulette/model/types/roulette';

interface TestRouletteProps {
  className?: string;
  name?: string;
  rotation?: Vector3;
  position?: Vector3;
  rotatingDirection?: RotatingDirection;
  ball?: MutableRefObject<Nullable<Mesh>>;
}

// @ts-ignore
const ammo = await Ammo();

export const TestRoulette = (props: TestRouletteProps) => {
  const {
    className,
    name = 'TestCell',
    position,
    rotation,
    rotatingDirection = RotatingDirection.Сlockwise,
  } = props;

  const scene = useScene() as Scene;
  const ballRef = useRef<Nullable<Mesh>>(null);

  const gravityVector = new Vector3(0, -9.81, 0);
  const physicsPlugin = new AmmoJSPlugin(true, ammo);
  scene.enablePhysics(gravityVector, physicsPlugin);

  return (
    <>
      <mesh
        name={name}
        position={position}
      >
        <RouletteMovingPart
          rotateDirection={rotatingDirection}
          ball={ballRef}
        />
        <mesh
          name={'ballRef'}
          ref={ballRef}
        >
          <Ball position={new Vector3(0, 20, 0)}/>
        </mesh>
      </mesh>
    </>
  );
};
