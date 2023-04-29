import React from 'react';
import '@babylonjs/core/Physics/physicsEngineComponent';
import { AmmoJSPlugin } from '@babylonjs/core/Physics/Plugins/ammoJSPlugin';
import Ammo from 'ammojs-typed';
import { useScene } from 'react-babylonjs';
import { Mesh, PhysicsImpostor, Scene, Vector3 } from '@babylonjs/core';
import { Ball } from 'shared/uiKit/3D/Ball';

interface TestCellProps {
  className?: string;
  name?: string;
  rotation?: Vector3;
  position?: Vector3;
}

// @ts-ignore
// const ammo = await Ammo();

export const TestCell = (props: TestCellProps) => {
  const {
    className,
    name = 'TestCell',
    position,
    rotation,
  } = props;

  const scene = useScene() as Scene;

  // const gravityVector = new Vector3(0.1, -2,0.1);
  // const physicsPlugin = new AmmoJSPlugin(true);
  // scene.enablePhysics(gravityVector, physicsPlugin);


  const ball = scene.getMeshByName('Ball');
  const cell = scene.getMeshByName('rouletteCell');
  let isTrue = false;
  if (ball && cell) {
    // ball.reg;
    // console.log(ball);
    const cellImpostor = cell._physicsImpostor as PhysicsImpostor;

    ball._physicsImpostor?.registerOnPhysicsCollide(cellImpostor, (main, collided) => {
      if (!isTrue) {
        const { id } = collided.object as Mesh;
        console.log('id-cell: ', id);
      }
      isTrue = true;
    });
  }
  // console.log('rouletteCell: ', cell);

  return (
    <>
      <mesh
        name={name}
        position={position}
      >
        {/*<RouletteCell*/}
        {/*  number={CellNumber.DoubleZero}*/}
        {/*  rotation={new Vector3(2,0,0)}*/}
        {/*  // position={new Vector3(0,0,-1)}*/}
        {/*/>*/}
        {/*<Ball position={new Vector3(0,5,1)} />*/}
      </mesh>
    </>
  );
};
