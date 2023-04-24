import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { RouletteCentralElement } from '../../RouletteCentralElement';
import { Mesh, Nullable, Vector3, Animation, Scene } from '@babylonjs/core';
import { useBeforeRender, useScene } from 'react-babylonjs';
import { RotatingDirection } from 'entities/Roulette/model/types/roulette';
import { getSlideUpAnimation, playAnimation } from 'shared/lib/utils/utils';

interface RouletteProps {
  className?: string;
  rotation?: Vector3;
  rotateDirection: RotatingDirection;
  ball: MutableRefObject<Nullable<Mesh>>;
}

export const RouletteMovingPart = (props: RouletteProps) => {
  const {
    className,
    rotation,
    rotateDirection,
    ball,
  } = props;
  const scene = useScene() as Scene;
  const rouletteMoveRef = useRef<Nullable<Mesh>>(null);

  useEffect(() => {
    if (rouletteMoveRef.current && scene) {
      playAnimation(rouletteMoveRef, scene, rotateDirection, 0.5, Vector3.Zero());
    }

  }, [rotateDirection, scene]);

  return (
    <>
      <transformNode
        name={'movingRoulettePart'}
        ref={rouletteMoveRef}
        rotation={rotation}
        disposeInstanceOnUnmount
      >
        <RouletteCentralElement
          ball={ball}
        />
      </transformNode>
    </>
  );
};
