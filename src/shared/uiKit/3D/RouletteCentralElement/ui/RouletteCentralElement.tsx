import React, { useMemo, useState } from 'react';
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
  CreateBarrierElement,
  CreateCentralConeElement,
  CreateCentralElement,
  CreateMainConeElement,
} from './utils/RouletteElements';
import { CannonJSPlugin } from '@babylonjs/core/Physics/Plugins/cannonJSPlugin';
import * as CANNON from 'cannon';
import { CreateCellBase } from 'shared/uiKit/3D/RouletteCell/ui/utils/Cell';
import { RouletteCellsBuilder } from 'shared/uiKit/3D/RouletteCell/model/CellsTypes';
import { getX, getY } from 'shared/lib/utils/utils';

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

    /*
    const hidden = MeshBuilder.CreateCylinder(`${name}-hidden`, {
      diameter: 15.2,
      height: 0.1,
    }, scene) as Mesh;
    hidden.position.y = -0.06;

     */

    const mainCone = CreateMainConeElement(scene, 'mainConeElement') as Mesh;

    const meshesArray = [];
    meshesArray.push(centralElement);
    meshesArray.push(centralCone);
    meshesArray.push(nextCone);
    meshesArray.push(mainCone);

    let yRotationAngle = -9.5;
    const k = 0.165;

    RouletteCellsBuilder.map((cell, index) => {
      yRotationAngle += 9.5;
      const y = (yRotationAngle * Math.PI) / 180;
      const r = 5.1;
      const x = r * Math.cos(y);
      const z = r * Math.sin(y);

      const cellPosition = new Vector3(x, 0, z);
      const cellRotation = new Vector3(0, 1.56 - (k * index), 0);

      const rouletteCell = CreateCellBase(scene, `${index}-cell`, cell, cellPosition, cellRotation) as Mesh;
      meshesArray.push(rouletteCell);
    });

    const xAngel = [0, -0.35, 0, 0.35];
    const zAngel = [0.2, 0, -0.2, 0];
    [0, 1.57, 3.14, 4.71].forEach((angel, index) => {
      const barrier = CreateBarrierElement(scene,`${index}-barrier`) as Mesh;
      barrier.position = new Vector3(getX(angel, 8.5), 1.4, getY(angel, 8.5));
      barrier.rotation = new Vector3(xAngel[index], 0, zAngel[index]);

      meshesArray.push(barrier);
    });

    const resultMesh = Mesh.MergeMeshes(
      meshesArray,
      true, true, undefined, false, true);

    if (resultMesh)
    resultMesh.physicsImpostor = new PhysicsImpostor(
      resultMesh,
      PhysicsImpostor.MeshImpostor,
      { mass: 0 },
      scene,
    );

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
