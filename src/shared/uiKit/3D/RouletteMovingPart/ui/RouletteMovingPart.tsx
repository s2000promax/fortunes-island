import React, { memo, useEffect, useRef } from 'react';
import { RouletteCentralElement } from '../../RouletteCentralElement';
import { Mesh, Nullable, PhysicsImpostor, Scene, Vector3 } from '@babylonjs/core';
import { useScene } from 'react-babylonjs';
import { playAnimation } from 'shared/lib/utils/utils';
import { CellNumber, RotatingDirection, RouletteCells, RouletteCellsBuilder } from 'entities/Roulette';
import { RouletteCell } from 'shared/uiKit/3D/RouletteCell';

interface RouletteProps {
  className?: string;
  rotation?: Vector3;
  isRouletteRotating: boolean;
  rotateDirection: RotatingDirection;
  cellImpostorHandler: (impostor: PhysicsImpostor) => void;
}

export const RouletteMovingPart = memo((props: RouletteProps) => {
  const {
    rotation,
    rotateDirection,
    isRouletteRotating,
    cellImpostorHandler,
  } = props;
  const scene = useScene() as Scene;
  const rouletteMoveRef = useRef<Nullable<Mesh>>(null);

  useEffect(() => {
    if (rouletteMoveRef.current && scene) {
      if (isRouletteRotating) {
        // playAnimation(rouletteMoveRef, scene, rotateDirection, 0.1, Vector3.Zero());
      };
    }

  }, [isRouletteRotating, rotateDirection, scene]);

  let yRotationAngle = 9.5;
  const k = 0.165;

  return (
    <>
      <transformNode
        name={'movingRoulettePart'}
        ref={rouletteMoveRef}
        rotation={rotation}
        disposeInstanceOnUnmount
      >
        <RouletteCentralElement />
        {
          RouletteCellsBuilder.map((cell, index) => {
            yRotationAngle -= 9.5;
            const y = (yRotationAngle * Math.PI) / 180;
            const r = 5.1;
            const x = r * Math.cos(y);
            const z = r * Math.sin(y);

            const cellPosition = new Vector3(x, 0, z);
            // const cellRotation = new Vector3(0, 1.56 + (k * index), 0);

            return (
              <RouletteCell
                  name={`${cell.number}-cell`}
                  key={`uniqueKey-${cell.number}-${cell.rot}`}
                  number={cell.number}
                  position={cellPosition}
                  cellImpostorHandler={cellImpostorHandler}
                />
            );
          })
        }
      </transformNode>
    </>
  );
});
