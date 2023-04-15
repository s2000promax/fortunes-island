import React, { useRef } from 'react';
import { RouletteBody } from 'shared/uiKit/3D/RouletteBody';
import { RouletteMovingPart } from 'shared/uiKit/3D/RouletteMovingPart';
import { Mesh, Nullable, Scene, Vector3 } from '@babylonjs/core';
import { Ball } from 'shared/uiKit/3D/Ball';
import '@babylonjs/core/Physics/physicsEngineComponent';
import { useBeforeRender, useScene } from 'react-babylonjs';
import { AmmoJSPlugin } from '@babylonjs/core/Physics/Plugins/ammoJSPlugin';
import Ammo from 'ammojs-typed';
import { getX, getY } from 'shared/lib/utils/utils';


interface RouletteProps {
  name?: string;
  rotation?: Vector3;
  position?: Vector3;
}

// @ts-ignore
const ammo = await Ammo();
export const Roulette = (props: RouletteProps) => {
  const {
    name = 'Roulette',
    rotation,
    position,
  } = props;
  console.log();
  const scene = useScene() as Scene;
  const ballRef = useRef<Nullable<Mesh>>(null);

  const gravityVector = new Vector3(0, -9.81,0);
  // const physicsPlugin = new CannonJSPlugin(undefined, undefined, CANNON);
  const physicsPlugin = new AmmoJSPlugin(true, ammo);
  scene.enablePhysics(gravityVector, physicsPlugin);

  const rpm = 5;
  let angel = 0;
  let count = 0;
  useBeforeRender((scene) => {

    if (ballRef.current && count < 1) {
      // Delta time smoothes the animation.
      const deltaTimeInMillis = scene.getEngine().getDeltaTime();
      // ballRef.current.rotation.y += (rpm / 30) * Math.PI * 2 * (deltaTimeInMillis / 1000);
      angel += (rpm) * Math.PI * 2 * (deltaTimeInMillis / 300);

      if (angel >= 360) {
        angel = 0;
        count += 1;
      }
      ballRef.current.position.x = getX(angel * Math.PI / 180, 10.2);
      ballRef.current.position.z = getY(angel * Math.PI / 180, 10.2);
    }
  });

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
        <mesh
          name={'superBall'}
          ref={ballRef}
        >
          <Ball position={new Vector3(0,2,0)} />
        </mesh>
      </mesh>
    </>
  );
};
