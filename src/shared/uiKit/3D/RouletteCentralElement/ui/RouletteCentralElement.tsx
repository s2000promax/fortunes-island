import React, { useMemo, useState } from 'react';
import {
  AxesViewer, HemisphericLight,
  Mesh,
  MeshBuilder, Nullable,
  Scene,
  Vector3,
} from '@babylonjs/core';
import { useScene } from 'react-babylonjs';
import { CreateCentralConeElement, CreateCentralElement, CreateMainConeElement } from './utils/RouletteElements';

interface RouletteProps {
  name?: string;
  rotation?: Vector3;
  position?: Vector3;
}

export const RouletteCentralElement = (props: RouletteProps) => {
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

    const centralElement = CreateCentralElement(scene, 'centralElement') as Mesh;
    centralElement.position.y = 1.1;

    const centralCone = CreateCentralConeElement(scene, 'centralConeElement') as Mesh;
    centralCone.position.y = 0.6;

    const nextCone = MeshBuilder.CreateCylinder(`${name}-con2`, {
      diameter: 10.2,
      height: 0.2,
    }, scene) as Mesh;

    const mainCone = CreateMainConeElement(scene, 'mainConeElement') as Mesh;

    const resultMesh = Mesh.MergeMeshes([
      centralElement,
      centralCone,
      nextCone,
      mainCone,
    ], true, true, undefined, false, true);

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
};
