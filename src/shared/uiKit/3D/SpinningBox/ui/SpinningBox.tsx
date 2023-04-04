import React, { MutableRefObject, useRef, useState } from 'react';
import {
  useBeforeRender,
  useClick,
  useHover,
} from 'react-babylonjs';
import { Vector3, Color3, Nullable, Mesh } from '@babylonjs/core';
import { Color3 as BabylonjsCoreColor3 } from '@babylonjs/core/Maths/math.color';

const DefaultScale = new Vector3(1, 1, 1);
const BiggerScale = new Vector3(1.25, 1.25, 1.25);

interface SpinningBoxProps {
  name: string;
  size: number;
  position: Vector3;
  hoveredColor: BabylonjsCoreColor3;
  color: BabylonjsCoreColor3;
}

export const SpinningBox = (props: SpinningBoxProps) => {
  const {
    name,
    position,
    size,
    hoveredColor,
    color,
  } = props;
  // access Babylon scene objects with same React hook as regular DOM elements
  const boxRef = useRef<Nullable<Mesh>>(null);

  const [clicked, setClicked] = useState(false);
  useClick(() => setClicked((clicked) => !clicked), boxRef);

  const [hovered, setHovered] = useState(false);
  useHover(
    () => setHovered(true),
    () => setHovered(false),
    boxRef,
  );

  // This will rotate the box on every Babylon frame.
  const rpm = 5;
  useBeforeRender((scene) => {
    if (boxRef.current) {
      // Delta time smoothes the animation.
      const deltaTimeInMillis = scene.getEngine().getDeltaTime();
      boxRef.current.rotation.y +=
        (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
    }
  });

  return (
    <box
      name={name}
      ref={boxRef}
      size={size}
      position={position}
      scaling={clicked ? BiggerScale : DefaultScale}
    >
      <standardMaterial
        name={`${name}-mat`}
        diffuseColor={hovered ? hoveredColor : color}
        specularColor={Color3.Black()}
      />
    </box>
  );
};
