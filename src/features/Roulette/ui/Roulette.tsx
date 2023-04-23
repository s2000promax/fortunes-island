import React, { useEffect, useRef, useState } from 'react';
import { RouletteBody } from 'shared/uiKit/3D/RouletteBody';
import { RouletteMovingPart } from 'shared/uiKit/3D/RouletteMovingPart';
import { Mesh, Nullable, Scene, Vector3 } from '@babylonjs/core';
import { Ball } from 'shared/uiKit/3D/Ball';
import '@babylonjs/core/Physics/physicsEngineComponent';
import { useBeforeRender, useScene } from 'react-babylonjs';
import { AmmoJSPlugin } from '@babylonjs/core/Physics/Plugins/ammoJSPlugin';
import { getX, getY, playAnimation } from 'shared/lib/utils/utils';
import type Ammo from 'ammojs-typed';
import { RotatingDirection } from 'entities/Roulette/model/types/roulette';

interface RouletteProps {
  name?: string;
  rotation?: Vector3;
  position?: Vector3;
  ammo: typeof Ammo;
  isRouletteRotating: boolean;
  rotateDirection: RotatingDirection;
}

export const Roulette = (props: RouletteProps) => {
  const {
    name = 'Roulette',
    rotation,
    position,
    ammo,
    isRouletteRotating,
    rotateDirection,
  } = props;

  const scene = useScene() as Scene;
  const [startRotate, setStartRotate] = useState<boolean>(true);
  const ballRef = useRef<Nullable<Mesh>>(null);

  const gravityVector = new Vector3(0, -9.81,0);
  const physicsPlugin = new AmmoJSPlugin(true, ammo);
  scene.enablePhysics(gravityVector, physicsPlugin);

  useEffect(() => {
    if (ballRef.current && scene) {
      playAnimation(ballRef, scene, rotateDirection, -10, Vector3.Zero());
    }

  }, [rotateDirection, scene]);

  return (
    <>
      <mesh
        name={name}
        position={position}
      >
        <RouletteBody/>
        <RouletteMovingPart
          rotation={rotation}
          rotateDirection={rotateDirection}
        />
        <mesh
          name={'superBall'}
          ref={ballRef}
        >
          <Ball
            position={new Vector3(0,3,-10.5)}
          />
        </mesh>
      </mesh>
    </>
  );
};
