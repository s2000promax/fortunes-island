import React, { useMemo, useState } from 'react';
import { useScene } from 'react-babylonjs';
import * as BABYLON from '@babylonjs/core';
import chipsSprite from '../../../../assets/chipsSprite.png';
import { ChipSizes } from '../utils/utils';
import { ChipsNominals } from '@/entities/InteractiveTable';

interface ChipsProps {
  nominal: ChipsNominals;
  rotation?: BABYLON.Vector3;
  position?: BABYLON.Vector3;
  onChooseChipHandler?: (id: ChipsNominals) => void;
}

export const Chips = (props: ChipsProps) => {
  const {
    nominal,
    rotation,
    position,
    onChooseChipHandler,
  } = props;
  const [mesh, setMesh] = useState<BABYLON.Nullable<BABYLON.Mesh>>(null);
  const scene = useScene() as BABYLON.Scene;
  useMemo(() => {
    const chipMaterial = new BABYLON.StandardMaterial(`${nominal}-material`);
    chipMaterial.diffuseTexture = new BABYLON.Texture(chipsSprite, scene);

    const rows = 3;
    const columns = 4;
    const r: number = ChipSizes[ChipSizes.findIndex(el => el.nominal === nominal)].row;
    const c: number = ChipSizes[ChipSizes.findIndex(el => el.nominal === nominal)].column;
    const color: BABYLON.Color4 = ChipSizes[ChipSizes.findIndex(el => el.nominal === nominal)].color;

    const faceUV = [
      new BABYLON.Vector4((c * 1) / columns, (r * 1) / rows, ((c + 1) * 1) / columns, ((r + 1) * 1) / rows), // bottom
      new BABYLON.Vector4(0, 0, 0, 0), // side
      new BABYLON.Vector4((c * 1) / columns, (r * 1) / rows, ((c + 1) * 1) / columns, ((r + 1) * 1) / rows), // top
    ];

    const faceColors = [
      color,
      color,
    ];

    const cylinder = BABYLON.MeshBuilder.CreateCylinder(
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
    cylinder.rotation.y = Math.PI;

    cylinder.actionManager = new BABYLON.ActionManager(scene);

    const hl = new BABYLON.HighlightLayer('hl1', scene, {
      // isStroke: true,
      // blurHorizontalSize: 4,
      // blurVerticalSize: 2,
    });

    //ON MOUSE ENTER
    cylinder.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger,
        function (ev) {
          scene.hoverCursor = 'pointer';
          hl.addMesh(cylinder, BABYLON.Color3.White());
        }));

    //ON MOUSE EXIT
    cylinder.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger,
        function (ev) {
          hl.removeMesh(cylinder);
        }));

    // ON CLICK
    cylinder.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,
        function (ev) {
        if (onChooseChipHandler) {
          onChooseChipHandler(nominal);
        }
        },
      ),
    );

    setMesh(cylinder);
  }, [nominal, onChooseChipHandler, scene]);

  return (
    <>
      {mesh && (
        <mesh
          name={`${nominal}_dollars`}
          fromInstance={mesh}
          rotation={rotation}
          position={position}
          disposeInstanceOnUnmount
        />
      )}
    </>
  );
};
