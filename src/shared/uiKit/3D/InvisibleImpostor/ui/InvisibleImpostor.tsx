import React, { useMemo, useState } from 'react';
import { AxesViewer, Mesh, MeshBuilder, Nullable, PhysicsImpostor, Scene, Vector3 } from '@babylonjs/core';
import { useScene } from 'react-babylonjs';

interface InvisibleImpostorProps {
  name?: string;
  rotation?: Vector3;
  position?: Vector3;
}

export const InvisibleImpostor = (props: InvisibleImpostorProps) => {
  const {
    name = 'InvisibleImpostor',
    rotation,
    position,
  } = props;
  const [mesh, setMesh] = useState<Nullable<Mesh>>(null);
  const scene = useScene() as Scene;

  useMemo(() => {
  if (_IS_DEV_) {
    const axes = new AxesViewer(scene, 2);
  }
  // const light1 = new HemisphericLight(`${name}-hemiLight-1`, new Vector3(-10, 10, -5), scene);
  // const light2 = new HemisphericLight(`${name}-hemiLight-2`, new Vector3(-10, -10, -5), scene);

  const invisibleBox = MeshBuilder.CreateBox(
    'InvisibleBox',
    {
      width: 0.1,
      height: 1,
      depth: 1,
    },
  ) as Mesh;

/*
    invisibleBox.physicsImpostor = new PhysicsImpostor(
      invisibleBox,
      PhysicsImpostor.SphereImpostor,
      { mass: 0 },
      scene,
    );
*/
  setMesh(invisibleBox);
}, [scene]);

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
