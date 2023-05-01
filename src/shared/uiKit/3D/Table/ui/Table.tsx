import React, { useMemo, useState } from 'react';
import {
  AxesViewer,
  Color3, Color4,
  HemisphericLight,
  Mesh, MeshBuilder,
  Nullable,
  Scene,
  StandardMaterial, Texture,
  Vector3,
} from '@babylonjs/core';
import { useScene } from 'react-babylonjs';
import { createSuperEllipsoid } from './utils/utils';
import tableTexture from './assets/tableTexture.png';

interface TableProps {
  name?: string;
  rotation?: Vector3;
  position?: Vector3;
}

export const Table = (props: TableProps) => {
  const { name = 'Table', rotation, position } = props;
  const [mesh, setMesh] = useState<Nullable<Mesh>>(null);
  const scene = useScene() as Scene;

  useMemo(() => {
    if (_IS_DEV_) {
      const axes = new AxesViewer(scene, 2);
    }

    const tableMaterial = new StandardMaterial('tableMaterial', scene);
    tableMaterial.diffuseTexture = new Texture(tableTexture, scene);
    tableMaterial.backFaceCulling = false;

    const table = createSuperEllipsoid(48, 0.2, 0.2, 30,10,0.6, scene)  as Mesh;
    table.material = tableMaterial;

    const points: Array<Vector3> = [
      new Vector3(18,0.6,-8),
      new Vector3(-18,0.6,-8),
      new Vector3(-18,0.6,2),
      new Vector3(18,0.6,2),
      new Vector3(18,0.6,-8),
      new Vector3(18,0.6,-6),
      new Vector3(-18,0.6,-6),
      new Vector3(-18,0.6,-4),
      new Vector3(18,0.6,-4),
      new Vector3(18,0.6,-2),
      new Vector3(-18,0.6,-2),
      new Vector3(-18,0.6,0),
      new Vector3(18,0.6,0),

      new Vector3(18,0.6,-8),
      new Vector3(6,0.6,-8),
      new Vector3(6,0.6,2),
      new Vector3(-6,0.6,2),
      new Vector3(-6,0.6,-8),

      new Vector3(-9,0.6,-8),
      new Vector3(-9,0.6,-2),
      new Vector3(-12,0.6,-2),
      new Vector3(-12,0.6,-8),
      new Vector3(-15,0.6,-8),
      new Vector3(-15,0.6,-2),

      new Vector3(15,0.6,-2),
      new Vector3(15,0.6,-8),
      new Vector3(12,0.6,-8),
      new Vector3(12,0.6,-2),
      new Vector3(9,0.6,-2),
      new Vector3(9,0.6,-8),

      new Vector3(3,0.6,-8),
      new Vector3(3,0.6,-2),
      new Vector3(0,0.6,-2),
      new Vector3(0,0.6,-8),
      new Vector3(-3,0.6,-8),
      new Vector3(-3,0.6,-2),

      new Vector3(-22,0.6,-2),
      new Vector3(-22,0.6,-8),
      new Vector3(-18,0.6,-8),
      new Vector3(-18,0.6,-6),
      new Vector3(-22,0.6,-6),
      new Vector3(-22,0.6,-4),
      new Vector3(-18,0.6,-4),

      new Vector3(18,0.6,-4),
      new Vector3(18,0.6,-2),
      new Vector3(21,0.6,-2),
      new Vector3(22,0.6,-3.5),
      new Vector3(21,0.6,-5),
      new Vector3(18,0.6,-5),
      new Vector3(21,0.6,-5),
      new Vector3(22,0.6,-6.5),
      new Vector3(21,0.6,-8),
      new Vector3(18,0.6,-8),

      new Vector3(18,0.6,2),
      new Vector3(12,0.6,2),
      new Vector3(12,0.6,0),
      new Vector3(0,0.6,0),
      new Vector3(0,0.6,2),
      new Vector3(-12,0.6,2),
      new Vector3(-12,0.6,0),
    ];

    const colors: Array<Color4> = [];

    for (let i = 0; i < points.length; i += 1) {
      colors.push(new Color4(1, 1, 1, 1));
    }

    const lines = MeshBuilder.CreateLines('lines', {
      points: points,
      colors: colors,
    }, scene) as Mesh;

    setMesh(lines);
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
