import React, { useMemo, useState } from 'react';
import '@babylonjs/core/Physics/physicsEngineComponent';

import { useScene } from 'react-babylonjs';
import {
  Vector3,
  Nullable,
  Mesh,
  HemisphericLight,
  StandardMaterial,
  MeshBuilder, PhysicsImpostor, Scene,
} from '@babylonjs/core';
import { formatDrawnNumber } from '@/shared/lib/utils/utils';
import { RotatingDirection } from '@/entities/Roulette';

interface BallProps {
  name?: string;
  position?: Vector3;
  rotation?: Vector3;
  rotateDirection: RotatingDirection;
  cellsImpostors: Array<PhysicsImpostor>;
  onAddTemporaryDrawnNumberHandler: (num: string) => void;
}

export const Ball = (props: BallProps) => {
  const {
    name = 'Ball',
    position,
    rotation,
    rotateDirection,
    cellsImpostors,
    onAddTemporaryDrawnNumberHandler,
  } = props;
  const [mesh, setMesh] = useState<Nullable<Mesh>>(null);
  const scene = useScene() as Scene;

  useMemo(() => {
    const ball = MeshBuilder.CreateSphere(
      `${name}-cylinder`,
      {
        diameter: 0.6,
      },
      scene,
    ) as Mesh;

    ball.physicsImpostor = new PhysicsImpostor(
      ball,
      PhysicsImpostor.SphereImpostor,
      { mass: 1 },
      scene,
    );

    ball.physicsImpostor.setLinearVelocity(
      new Vector3(rotateDirection * (Math.random() * 10 + 30), 0, 0),
    );

    ball.physicsImpostor.setAngularVelocity(
      new Vector3( 0, Math.random() * 10, rotateDirection * Math.random() * 10),
    );

    ball.physicsImpostor.registerOnPhysicsCollide(cellsImpostors,
      (main, collided) => {
        const { id } = collided.object as Mesh;

        if (_IS_DEV_) {
          console.log('id-cell: ', formatDrawnNumber(id));
        }
        onAddTemporaryDrawnNumberHandler(formatDrawnNumber(id));

      });

    setMesh(ball);
  }, [cellsImpostors, name, onAddTemporaryDrawnNumberHandler, rotateDirection, scene]);

  return (
    <>
      {mesh && (
        <mesh
          name={name}
          fromInstance={mesh}
          rotation={rotation}
          position={position}
          disposeInstanceOnUnmount
        />
      )}
    </>
  );
};
