import React, { memo, useMemo, useState } from 'react';
import '@babylonjs/core/Physics/physicsEngineComponent';
import {
  AxesViewer,
  Mesh,
  Nullable,
  PhysicsImpostor,
  Scene,
  Vector3,
} from '@babylonjs/core';
import { useScene } from 'react-babylonjs';
import { CreateCellBase } from './utils/Cell';
import { CellNumber, RouletteCells, RouletteCellsBuilder } from '@/entities/Roulette';


interface RouletteProps {
  name?: string;
  rotation?: Vector3;
  position?: Vector3;
  number: CellNumber;
  cellImpostorHandler: (impostor: PhysicsImpostor) => void;
}

export const RouletteCell = memo((props: RouletteProps) => {
  const {
    name = 'rouletteCell',
    rotation,
    position,
    number,
     cellImpostorHandler,
  } = props;
  const [mesh, setMesh] = useState<Nullable<Mesh>>(null);
  const scene = useScene() as Scene;

  useMemo(() => {
    if (_IS_DEV_) {
      const axes = new AxesViewer(scene, 2);
    }

    const cellIndex: number = RouletteCellsBuilder
      .findIndex((item) => item.number === number);

    const cell: RouletteCells = RouletteCellsBuilder[cellIndex];
    const rot: number = RouletteCellsBuilder[cellIndex].rot;

    const rouletteCell = CreateCellBase(scene, `${number}-cell`, cell) as Mesh;
    rouletteCell.rotation.y = rot;
    rouletteCell.position.z = -23;
    rouletteCell.position.y = -1.5;

    rouletteCell.physicsImpostor = new PhysicsImpostor(rouletteCell, PhysicsImpostor.MeshImpostor,
      {
        mass: 0,
        friction: 1,
      },
      scene);

    cellImpostorHandler(rouletteCell.physicsImpostor);

    setMesh(rouletteCell);
  }, [cellImpostorHandler, number, scene]);

  return (
    <>
      {mesh && (
        <mesh
        name={name}
        fromInstance={mesh}
        position={position}
        disposeInstanceOnUnmount
        >
        </mesh>
        )}
    </>
  );
});
