import React, { useRef } from 'react';
import { RouletteCell } from 'shared/uiKit/3D/RouletteCell';
import { RouletteCentralElement } from '../../RouletteCentralElement';
import { RouletteCellsBuilder } from '../../RouletteCell/model/CellsTypes';
import { Mesh, Nullable, PhysicsImpostor, Vector3 } from '@babylonjs/core';
import { useBeforeRender } from 'react-babylonjs';


interface RouletteProps {
  className?: string;
  rotation?: Vector3;
}

export const RouletteMovingPart = (props: RouletteProps) => {
  const { className, rotation } = props;
    const rouletteMoveRef = useRef<Nullable<Mesh>>(null);


  let yRotationAngle = -9.5;
  const k = 0.165;

    const rpm = 5;
    let count = 0;
    useBeforeRender((scene) => {

      if (rouletteMoveRef.current && count < 40) {
        // Delta time smoothes the animation.
        const deltaTimeInMillis = scene.getEngine().getDeltaTime();
        rouletteMoveRef.current.rotation.y +=
          (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
        count += 1;
      }

    });

  return (
    <>
      <mesh
        name={'movingRoulettePart'}
        ref={rouletteMoveRef}
        // fromInstance={mesh}
        rotation={rotation}
        disposeInstanceOnUnmount
      >
        <RouletteCentralElement/>
        {/*  {RouletteCellsBuilder.map((cell, index) => {*/}
        {/*  yRotationAngle += 9.5;*/}
        {/*  const y = (yRotationAngle * Math.PI) / 180;*/}
        {/*  const r = 5.1;*/}
        {/*  const x = r * Math.cos(y);*/}
        {/*  const z = r * Math.sin(y);*/}

        {/*  return (*/}
        {/*    <RouletteCell*/}
        {/*      key={cell.number + cell.row + cell.column}*/}
        {/*      number={cell.number}*/}
        {/*      position={new Vector3(x, 0, z)}*/}
        {/*      rotation={new Vector3(0, 1.56 - (k * index), 0)}*/}
        {/*    />*/}
        {/*  );*/}
        {/*})}*/}
      </mesh>
    </>
  );
}
  ;
