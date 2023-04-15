import React, { MutableRefObject, useMemo, useRef, useState } from 'react';
import '@babylonjs/core/Physics/physicsEngineComponent';

import {
  useBeforeRender,
  useClick,
  useHover, useScene,
} from 'react-babylonjs';
import {
  Vector3,
  Color3,
  Nullable,
  Mesh,
  HemisphericLight,
  StandardMaterial,
  Texture,
  Color4,
  Vector4, MeshBuilder, PhysicsImpostor, Scene, Quaternion,
} from '@babylonjs/core';

interface BallProps {
  name?: string;
  position?: Vector3;
  rotation?: Vector3;
}
// @ts-ignore
// const ammo = await Ammo();
export const Ball = (props: BallProps) => {
  const {
    name = 'Ball',
    position,
    rotation,
    } = props;
  const [mesh, setMesh] = useState<Nullable<Mesh>>(null);
  const scene = useScene() as Scene;

  useMemo(() => {
    if (scene) {
      const light1 = new HemisphericLight(`${name}-hemiLight-1`, new Vector3(-10, 10, -5), scene);
      const light2 = new HemisphericLight(`${name}-hemiLight-2`, new Vector3(-10, -10, -5), scene);
    }

    const chipMaterial = new StandardMaterial(`${name}-material`);
    // chipMaterial.diffuseTexture = new Texture(chipsSprite, scene);

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
      { mass: 1, friction: 0.05 },
      scene,
    );

    setMesh(ball);
  }, [name, scene]);



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
