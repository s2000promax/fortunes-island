import React, { memo, MutableRefObject, useMemo, useState } from 'react';
import * as cannon from "cannon";
import {
  AxesViewer, HemisphericLight, HingeJoint,
  Mesh,
  MeshBuilder, Nullable, PhysicsImpostor,
  Scene,
  Vector3,
} from '@babylonjs/core';
import { useScene } from 'react-babylonjs';
import {
  CreateCentralConeElement,
  CreateCentralElement,
} from './utils/RouletteElements';

interface RouletteProps {
  name?: string;
  rotation?: Vector3;
  position?: Vector3;
}

export const RouletteCentralElement = memo((props: RouletteProps) => {
  const {
    name = 'rouletteCentralElement',
    rotation,
    position,
  } = props;
  const [mesh, setMesh] = useState<Nullable<Mesh>>(null);
  const scene = useScene() as Scene;

  useMemo(() => {
    if (_IS_DEV_) {
      const axes = new AxesViewer(scene, 2);
    }

    const light = new HemisphericLight(`${name}-hemiLight-1`, new Vector3(-20, 20, -20), scene);
    light.intensity = 0.2;

    const meshesArray = [];

    const centralElement = CreateCentralElement(scene, 'centralElement') as Mesh;
    centralElement.position.y = 1.1;

    const centralCone = CreateCentralConeElement(scene, 'centralConeElement') as Mesh;
    centralCone.position.y = 0.6;

    const nextCone = MeshBuilder.CreateCylinder(`${name}-con2`, {
      diameter: 10.2,
      height: 0.2,
    }, scene) as Mesh;

    meshesArray.push(centralElement);
    meshesArray.push(centralCone);
    meshesArray.push(nextCone);

    const resultMesh = Mesh.MergeMeshes(
      meshesArray,
      true, true, undefined, false, true);

    if (resultMesh) {
      resultMesh.physicsImpostor = new PhysicsImpostor(
        resultMesh,
        PhysicsImpostor.MeshImpostor,
        { mass: 0, damping: 2 },
        scene,
      );
    }

    setMesh(resultMesh);
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
});
