import React, { useMemo, useState } from 'react';
import * as BABYLON from '@babylonjs/core';
import { Vector3 } from '@babylonjs/core';
import * as earcut from 'earcut';
import { useScene } from 'react-babylonjs';
import numberSprite from '../../../../assets/cellsNumberSprite.png';

import { InteractiveButtonSize } from '../model/types';

interface InteractiveButtonProps {
  name: string;
  size: InteractiveButtonSize;
  rotation?: BABYLON.Vector3;
  position?: BABYLON.Vector3;
}

export const InteractiveButton = (props: InteractiveButtonProps) => {
  const {
    name = 'InteractiveButton',
    size,
    rotation,
    position,
  } = props;

  const [mesh, setMesh] = useState<BABYLON.Nullable<BABYLON.Mesh>>(null);
  const scene = useScene() as BABYLON.Scene;

  useMemo(() => {
    if (_IS_DEV_) {
      const axes = new BABYLON.AxesViewer(scene, 2);
    }
    const light1 = new BABYLON.HemisphericLight(`${name}-hemiLight-1`, new BABYLON.Vector3(-10, 10, -5), scene);


    const buttonMaterial = new BABYLON.StandardMaterial(`${name}-material`);
    buttonMaterial.diffuseTexture = new BABYLON.Texture(numberSprite, scene);

    const rows = 3;
    const columns = 18;
    const r: number = 0;
    const c: number = 0;

    const faceUV = [
      new BABYLON.Vector4((c * 1) / columns, (r * 1) / rows, ((c + 1) * 1) / columns, ((r + 1) * 1) / rows), // top
    ];

    const shapeButton: Array<Vector3> = [];

    if (size === InteractiveButtonSize.SIZE0) {
      shapeButton.push(new Vector3(1.45,0,-0.95));
      shapeButton.push(new Vector3(-1.45,0,-0.95));
      shapeButton.push(new Vector3(-1.45,0,1.95));
      shapeButton.push(new Vector3(1.45,0,1.95));
      shapeButton.push(new Vector3(2.45,0,0.45));
    }

    if (size === InteractiveButtonSize.SIZE1) {
      shapeButton.push(new Vector3(1.45,0,-0.95));
      shapeButton.push(new Vector3(-1.45,0,-0.95));
      shapeButton.push(new Vector3(-1.45,0,0.95));
      shapeButton.push(new Vector3(1.45,0,0.95));
    }

    if (size === InteractiveButtonSize.SIZE2) {
      shapeButton.push(new Vector3(2.95,0,-0.95));
      shapeButton.push(new Vector3(-2.95,0,-0.95));
      shapeButton.push(new Vector3(-2.95,0,0.95));
      shapeButton.push(new Vector3(2.95,0,0.95));
    }

    if (size === InteractiveButtonSize.SIZE21) {
      shapeButton.push(new Vector3(1.95,0,-0.95));
      shapeButton.push(new Vector3(-1.95,0,-0.95));
      shapeButton.push(new Vector3(-1.95,0,0.95));
      shapeButton.push(new Vector3(1.95,0,0.95));
    }

    if (size === InteractiveButtonSize.SIZE4) {
      shapeButton.push(new Vector3(5.95,0,-0.95));
      shapeButton.push(new Vector3(-5.95,0,-0.95));
      shapeButton.push(new Vector3(-5.95,0,0.95));
      shapeButton.push(new Vector3(5.95,0,0.95));
    }

    const button = BABYLON.MeshBuilder.CreatePolygon(
      `${name}-button`,
      {
        shape: shapeButton,
        faceUV: faceUV,
      },
      scene,
      earcut,
    ) as BABYLON.Mesh;

    button.material = buttonMaterial;
    button.isPickable = true;
    // box.rotation.y = 3;

    button.actionManager = new BABYLON.ActionManager(scene);

    const hl = new BABYLON.HighlightLayer('hl1', scene, {
      // isStroke: true,
      blurHorizontalSize: 4,
      blurVerticalSize: 2,
    });

    //ON MOUSE ENTER
    button.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger,
        function (ev) {
          scene.hoverCursor = 'pointer';
          hl.addMesh(button, BABYLON.Color3.White());
        }));

    //ON MOUSE EXIT
    button.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger,
        function (ev) {
          hl.removeMesh(button);
        }));

    // ON CLICK
    button.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,
        function (ev) {
          console.log('click', ev);
        },
      ),
    );


    setMesh(button);
  }, [name, scene]);

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
