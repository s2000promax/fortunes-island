import React, { ReactNode, useMemo, useRef, useState } from 'react';
import '@babylonjs/core/Physics/physicsEngineComponent';
import {
  AxesViewer, Mesh, Nullable, PhysicsImpostor,
  Scene,
  Vector3,
} from '@babylonjs/core';
import { useBeforeRender, useScene } from 'react-babylonjs';
import { CreateCellBase } from './utils/Cell';
import { CellNumber, RouletteCells, RouletteCellsBuilder } from '../model/CellsTypes';

interface RouletteProps {
  name?: string;
  rotation?: Vector3;
  position?: Vector3;
  number: CellNumber;
}

export const RouletteCell = (props: RouletteProps) => {
  const {
    name = 'rouletteCell',
    rotation,
    position,
    number,
  } = props;
  const [mesh, setMesh] = useState<Nullable<Mesh>>(null);
  const scene = useScene() as Scene;

  useMemo(() => {
    if (_IS_DEV_) {
      const axes = new AxesViewer(scene, 2);
    }
    // const light1 = new HemisphericLight(`${name}-hemiLight-1`, new Vector3(-10, 10, -5), scene);
    // const light2 = new HemisphericLight(`${name}-hemiLight-2`, new Vector3(-10, -10, -5), scene);

    const cell: RouletteCells =
      RouletteCellsBuilder[RouletteCellsBuilder
        .findIndex((item) => item.number === number)];

    const rouletteCell = CreateCellBase(scene, `${number}-cell`, cell) as Mesh;

    rouletteCell.physicsImpostor = new PhysicsImpostor(rouletteCell, PhysicsImpostor.MeshImpostor,
      {
        mass: 0,
        friction: 1,
      },
      scene);

    setMesh(rouletteCell);
  }, [number, scene]);

  return (
    <>
      {mesh && (
        <mesh
        name={name}
        fromInstance={mesh}
        rotation={rotation}
        position={position}
        disposeInstanceOnUnmount
        >
        </mesh>
        )}
    </>
  );
};
