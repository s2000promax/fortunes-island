import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { RouletteBody } from 'shared/uiKit/3D/RouletteBody';
import { RouletteMovingPart } from 'shared/uiKit/3D/RouletteMovingPart';
import { PhysicsImpostor, Scene, Vector3 } from '@babylonjs/core';
import { Ball } from 'shared/uiKit/3D/Ball';
import '@babylonjs/core/Physics/physicsEngineComponent';
import { useScene } from 'react-babylonjs';

import { RotatingDirection } from 'entities/Roulette/model/types/roulette';
import { AmmoJSPlugin } from '@babylonjs/core/Physics/Plugins/ammoJSPlugin';

// @ts-ignore
import { default as Ammo } from 'ammo.js/builds/ammo';

// Ammo();

interface RouletteProps {
  name?: string;
  rotation?: Vector3;
  position?: Vector3;
  // ammo: typeof Ammo;
  isRouletteRotating: boolean;
  rotateDirection: RotatingDirection;
  onAddTemporaryDrawnNumberHandler: (num: string) => void;
}

export const Roulette = memo((props: RouletteProps) => {
  const {
    name = 'Roulette',
    rotation,
    position,
    isRouletteRotating,
    rotateDirection,
    onAddTemporaryDrawnNumberHandler,
  } = props;

  const scene = useScene() as Scene;
  const [isSceneReady, setIsSceneReady] = useState<boolean>(false);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [cellsPhysicsImpostors, setCellsPhysicsImpostors] = useState<Array<PhysicsImpostor>>([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const cellsPhysics: Array<PhysicsImpostor> = [];

  useEffect(() => {
    if (!isSceneReady) {
      Ammo().then(() => {
        const gravityVector = new Vector3(0, -10, 0);
        const physicsPlugin = new AmmoJSPlugin(true);
        physicsPlugin.setTimeStep(1/120);
        // physicsPlugin.setFixedTimeStep(0.01);
        physicsPlugin.setMaxSteps(50);
        console.log(physicsPlugin.getTimeStep());
        scene.enablePhysics(gravityVector, physicsPlugin);
        setIsSceneReady(true);
      });
    }
  }, [isSceneReady, scene]);

  const cellImpostorHandler = useCallback((impostor: PhysicsImpostor) => {
    cellsPhysics.push(impostor);
  }, [cellsPhysics]);

  useEffect(() => {
    if (cellsPhysics.length === 38 && !isStart) {
      setCellsPhysicsImpostors(cellsPhysics);
      setIsStart(true);
    }
  }, [cellsPhysics, isStart, scene]);

  return (
    <>
      {
        isSceneReady && (
          <mesh
            name={name}
            position={position}
          >
            {
              isStart && isRouletteRotating && (
                <Ball
                  position={new Vector3(-2, 2.5, -9)}
                  rotateDirection={rotateDirection}
                  cellsImpostors={cellsPhysicsImpostors}
                  onAddTemporaryDrawnNumberHandler={onAddTemporaryDrawnNumberHandler}
                />
              )
            }
            <RouletteBody/>
            <RouletteMovingPart
              rotation={rotation}
              isRouletteRotating={isRouletteRotating}
              rotateDirection={rotateDirection}
              cellImpostorHandler={cellImpostorHandler}
            />
          </mesh>
        )
      }
    </>
  );
});
