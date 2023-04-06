import React, { useMemo, useState } from 'react';
import { useScene } from 'react-babylonjs';
import {
  Color4, HemisphericLight,
  Mesh,
  MeshBuilder,
  Nullable,
  StandardMaterial,
  Texture,
  Vector3,
  Vector4,
} from '@babylonjs/core';
import chipsSprite from './assets/chips/chipsSprite.png';

export enum ChipsNominals {
  CHIP_25_CENTS = 'chip_25_cents',
  CHIP_50_CENTS = 'chip_50_cents',
  CHIP_1_DOLLAR = 'chip_1_dollar',
  CHIP_5_DOLLARS = 'chip_5_dollars',
  CHIP_10_DOLLARS = 'chip_10_dollars',
  CHIP_25_DOLLARS = 'chip_25_dollars',
  CHIP_50_DOLLARS = 'chip_50_dollars',
  CHIP_100_DOLLARS = 'chip_100_dollars',
  CHIP_500_DOLLARS = 'chip_500_dollars',
  CHIP_1000_DOLLARS = 'chip_1000_dollars',
  CHIP_5000_DOLLARS = 'chip_5000_dollars',
  CHIP_10000_DOLLARS = 'chip_10000_dollars',
}

const ChipSizes = [
  { nominal: ChipsNominals.CHIP_25_CENTS, row: 2, column: 0, color: new Color4(0.65, 0.45, 0.24, 1) },
  { nominal: ChipsNominals.CHIP_50_CENTS, row: 2, column: 1, color: new Color4(0.6, 0.66, 0.62, 1) },
  { nominal: ChipsNominals.CHIP_1_DOLLAR, row: 2, column: 2, color: new Color4(0.7, 0.7, 0.7, 1) },
  { nominal: ChipsNominals.CHIP_5_DOLLARS, row: 2, column: 3, color: new Color4(1, 0.1, 0.1, 1) },
  { nominal: ChipsNominals.CHIP_10_DOLLARS, row: 1, column: 0, color: new Color4(0, 1, 1, 1) },
  { nominal: ChipsNominals.CHIP_25_DOLLARS, row: 1, column: 1, color: new Color4(0.39, 0.89, 0.1, 1) },
  { nominal: ChipsNominals.CHIP_50_DOLLARS, row: 1, column: 2, color: new Color4(0.1, 0.1, 1, 1) },
  { nominal: ChipsNominals.CHIP_100_DOLLARS, row: 1, column: 3, color: new Color4(0.1, 0.1, 0.1, 1) },
  { nominal: ChipsNominals.CHIP_500_DOLLARS, row: 0, column: 0, color: new Color4(0.69, 0.4, 0.12, 1) },
  { nominal: ChipsNominals.CHIP_1000_DOLLARS, row: 0, column: 1, color: new Color4(0.69, 0.59, 0.14, 1) },
  { nominal: ChipsNominals.CHIP_5000_DOLLARS, row: 0, column: 2, color: new Color4(1, 0.3, 0.3, 1) },
  { nominal: ChipsNominals.CHIP_10000_DOLLARS, row: 0, column: 3, color: new Color4(0.98, 0.45, 0.27, 1) },
];

interface ChipsProps {
  nominal: ChipsNominals;
  rotation?: Vector3;
  position?: Vector3;
}

export const Chips = (props: ChipsProps) => {
  const {
    nominal,
    rotation,
    position,
  } = props;
  const [mesh, setMesh] = useState<Nullable<Mesh>>(null);
  const scene = useScene();
  useMemo(() => {
    if (scene) {
      const light1 = new HemisphericLight(`${nominal}-hemiLight-1`, new Vector3(-10, 10, -5), scene);
      const light2 = new HemisphericLight(`${nominal}-hemiLight-2`, new Vector3(-10, -10, -5), scene);
    }

    const chipMaterial = new StandardMaterial(`${nominal}-material`);
    chipMaterial.diffuseTexture = new Texture(chipsSprite, scene);

    const rows = 3;
    const columns = 4;
    const r: number = ChipSizes[ChipSizes.findIndex(el => el.nominal === nominal)].row;
    const c: number = ChipSizes[ChipSizes.findIndex(el => el.nominal === nominal)].column;
    const color: Color4 = ChipSizes[ChipSizes.findIndex(el => el.nominal === nominal)].color;

    const faceUV = [
      new Vector4((c * 1) / columns, (r * 1) / rows, ((c + 1) * 1) / columns, ((r + 1) * 1) / rows), // bottom
      new Vector4(0, 0, 0, 0), // side
      new Vector4((c * 1) / columns, (r * 1) / rows, ((c + 1) * 1) / columns, ((r + 1) * 1) / rows), // top
    ];

    const faceColors = [
      color,
      color,
    ];

    const cylinder = MeshBuilder.CreateCylinder(
      `${nominal}-cylinder`,
      {
        diameter: 2,
        height: 0.2,
        faceUV: faceUV,
        faceColors: faceColors,
      },
      scene,
    );
    cylinder.material = chipMaterial;
    cylinder.rotation.y = 3;

    setMesh(cylinder);
  }, [nominal, scene]);

  return (
    <>
      {mesh && (
        <mesh
          name={nominal}
          fromInstance={mesh}
          rotation={rotation}
          position={position}
          disposeInstanceOnUnmount
        />
      )}
    </>
  );
};
