import React, { useMemo, useState } from 'react';
import {
  AxesViewer, Color3, HemisphericLight,
  Mesh,
  MeshBuilder, Nullable, PhysicsImpostor,
  Scene, StandardMaterial,
  Vector3,
} from '@babylonjs/core';
import { useScene } from 'react-babylonjs';
import { getX, getY } from 'shared/lib/utils/utils';

interface RouletteBodyProps {
  name?: string;
  rotation?: Vector3;
  position?: Vector3;
}

export const RouletteBody = (props: RouletteBodyProps) => {
  const {
    name = 'TempConeCentral',
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
    const light2 = new HemisphericLight(`${name}-hemiLight-2`, new Vector3(-10, -10, -5), scene);

    const myShape = [
      new Vector3(11, 0, 0),
      new Vector3(11, 2.6, 0),
      new Vector3(10.6, 3.3, 0),
      new Vector3(10.6, 3.5, 0),
      new Vector3(11.8, 3.5, 0),
      new Vector3(11.8, 3.3, 0),
      new Vector3(11.5, 2.9, 0),
      new Vector3(11.5, 0, 0),
      new Vector3(11, 0, 0),
    ];

    const myPath = [];

    for (let i = 0; i <= 6.8; i += 0.2) {
      myPath.push(new Vector3(getX(i, 0.1), 0, getY(i, 0.1)));
    }

    const body = MeshBuilder.ExtrudeShape(
      `body-extrudeShape`,
      {
        shape: myShape,
        path: myPath,
        sideOrientation: Mesh.DOUBLESIDE,
      }, scene) as Mesh;

    const mainBodyMaterial = new StandardMaterial(`body-mainMaterial`, scene);
    mainBodyMaterial.diffuseColor = new Color3(0.4, 0.25, 0.03);
    body.material = mainBodyMaterial;

    body.physicsImpostor = new PhysicsImpostor(
      body,
      PhysicsImpostor.MeshImpostor,
      { mass: 0 },
      scene,
    );

    setMesh(body);
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
