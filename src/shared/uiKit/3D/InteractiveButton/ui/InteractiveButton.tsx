import React, { useEffect, useMemo, useState } from 'react';
import * as BABYLON from '@babylonjs/core';
import * as earcut from 'earcut';
import { useScene } from 'react-babylonjs';
import numberSprite from '../../../../assets/cellsNumberSprite.png';
import numberSprite_x2 from '../../../../assets/extraNumbersSprite_x2.png';
import numberSprite_x4 from '../../../../assets/extraNumbersSprite_x4.png';

import { InteractiveButtonSize } from '../model/types';
import {
  BetsIdTypes,
  DoubleBetsButtons,
  SectionBetsButtons,
  SpecialBetsButtons,
  ZeroBetsButtons,
} from 'entities/InteractiveTable';
import { HoverIdTypes } from 'entities/InteractiveTable/model/types/interactiveTable';

interface InteractiveButtonProps {
  name: string;
  size: InteractiveButtonSize;
  row?: number;
  col: number;
  rotation?: BABYLON.Vector3;
  position?: BABYLON.Vector3;
  isHover?: boolean;
  id: BetsIdTypes;
  onClickHandler: (id: BetsIdTypes) => void;
  onHoverHandler: (id: BetsIdTypes) => void;
  onRemoveHoverHandler: () => void;
}

export const InteractiveButton = (props: InteractiveButtonProps) => {
  const {
    name = 'InteractiveButton',
    size,
    row = 0,
    col,
    rotation,
    position,
    isHover,
    id,
    onClickHandler,
    onHoverHandler,
    onRemoveHoverHandler,
  } = props;

  const [mesh, setMesh] = useState<BABYLON.Nullable<BABYLON.Mesh>>(null);
  const scene = useScene() as BABYLON.Scene;

  useMemo(() => {
    if (_IS_DEV_) {
      const axes = new BABYLON.AxesViewer(scene, 2);
    }
    const light1 = new BABYLON.HemisphericLight(`${name}-hemiLight-1`, new BABYLON.Vector3(-10, 10, -5), scene);

    const buttonMaterial = new BABYLON.StandardMaterial(`${name}-material`);

    const shapeButton: Array<BABYLON.Vector3> = [];
    let rows = 3;
    let columns = 18;

    if (size === InteractiveButtonSize.SIZE0) {
      buttonMaterial.diffuseTexture = new BABYLON.Texture(numberSprite, scene);
      shapeButton.push(new BABYLON.Vector3(-1.45, 0, -0.95));
      shapeButton.push(new BABYLON.Vector3(1.45, 0, -0.95));
      shapeButton.push(new BABYLON.Vector3(1.45, 0, 1.95));
      shapeButton.push(new BABYLON.Vector3(-1.45, 0, 1.95));
      shapeButton.push(new BABYLON.Vector3(-2.4, 0, 0.5));
    }

    if (size === InteractiveButtonSize.SIZE1) {
      buttonMaterial.diffuseTexture = new BABYLON.Texture(numberSprite, scene);
      shapeButton.push(new BABYLON.Vector3(1.45, 0, -0.95));
      shapeButton.push(new BABYLON.Vector3(-1.45, 0, -0.95));
      shapeButton.push(new BABYLON.Vector3(-1.45, 0, 0.95));
      shapeButton.push(new BABYLON.Vector3(1.45, 0, 0.95));
    }

    if (size === InteractiveButtonSize.SIZE2) {
      buttonMaterial.diffuseTexture = new BABYLON.Texture(numberSprite_x2, scene);
      buttonMaterial.diffuseTexture.hasAlpha = true;
      rows = 1;
      columns = 9;
      shapeButton.push(new BABYLON.Vector3(2.95, 0, -0.95));
      shapeButton.push(new BABYLON.Vector3(-2.95, 0, -0.95));
      shapeButton.push(new BABYLON.Vector3(-2.95, 0, 0.95));
      shapeButton.push(new BABYLON.Vector3(2.95, 0, 0.95));
    }

    if (size === InteractiveButtonSize.SIZE21) {
      buttonMaterial.diffuseTexture = new BABYLON.Texture(numberSprite_x2, scene);
      buttonMaterial.diffuseTexture.hasAlpha = true;
      rows = 1;
      columns = 9;
      shapeButton.push(new BABYLON.Vector3(1.95, 0, -0.95));
      shapeButton.push(new BABYLON.Vector3(-1.95, 0, -0.95));
      shapeButton.push(new BABYLON.Vector3(-1.95, 0, 0.95));
      shapeButton.push(new BABYLON.Vector3(1.95, 0, 0.95));
    }

    if (size === InteractiveButtonSize.SIZE4) {
      buttonMaterial.diffuseTexture = new BABYLON.Texture(numberSprite_x4, scene);
      buttonMaterial.diffuseTexture.hasAlpha = true;
      rows = 1;
      columns = 3;
      shapeButton.push(new BABYLON.Vector3(5.95, 0, -0.95));
      shapeButton.push(new BABYLON.Vector3(-5.95, 0, -0.95));
      shapeButton.push(new BABYLON.Vector3(-5.95, 0, 0.95));
      shapeButton.push(new BABYLON.Vector3(5.95, 0, 0.95));
    }

    const r = row;
    const c = col;

    const faceUV = [
      new BABYLON.Vector4((c * 1) / columns, (r * 1) / rows, ((c + 1) * 1) / columns, ((r + 1) * 1) / rows), // top
    ];

    const button = BABYLON.MeshBuilder.CreatePolygon(
      `${name}-button`,
      {
        shape: shapeButton,
        faceUV: faceUV,
      },
      scene,
      earcut,
    ) as BABYLON.Mesh;

    button.rotation = new BABYLON.Vector3(0, Math.PI, 0);

    button.material = buttonMaterial;
    button.isPickable = true;
    // box.rotation.y = 3;

    button.actionManager = new BABYLON.ActionManager(scene);

    const hl = new BABYLON.HighlightLayer('hl1', scene, {});

    //ON MOUSE ENTER
    button.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger,
        function (ev) {
          scene.hoverCursor = 'pointer';
          hl.addMesh(button, BABYLON.Color3.White());
          onHoverHandler(id);
        }));

    //ON MOUSE EXIT
    button.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger,
        function (ev) {
          hl.removeMesh(button);
          onRemoveHoverHandler();
        }));

    // ON CLICK
    button.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,
        function (ev) {
          console.log('click' + id, ev);
          onClickHandler(id);
        },
      ),
    );

    setMesh(button);
  }, [col, id, name, onClickHandler, onHoverHandler, onRemoveHoverHandler, row, scene, size]);

  useEffect(() => {
    const hl = new BABYLON.HighlightLayer('hl1', scene, {});

    if (isHover && mesh) {
      hl.addMesh(mesh, BABYLON.Color3.White());
    }

    return () => {
      if (mesh) {
        hl.removeMesh(mesh);
      }
    };
  }, [isHover, mesh, scene]);

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
