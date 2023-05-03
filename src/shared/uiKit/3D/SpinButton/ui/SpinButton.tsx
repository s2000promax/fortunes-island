import React, { useMemo, useRef, useState } from 'react';
import * as BABYLON from '@babylonjs/core';
import * as earcut from 'earcut';
import spinButtonTexture from '../../../../assets/spin-button-material.jpg';
import { useBeforeRender, useScene } from 'react-babylonjs';
import { Mesh, Nullable } from '@babylonjs/core';

interface SpinButtonProps {
  name?: string;
  rotation?: BABYLON.Vector3;
  position?: BABYLON.Vector3;
  onRouletteStartHandler: () => void;
}

export const SpinButton = (props: SpinButtonProps) => {
  const {
    name = 'SpinButton',
    rotation,
    position,
    onRouletteStartHandler,
  } = props;

  const [mesh, setMesh] = useState<BABYLON.Nullable<BABYLON.Mesh>>(null);
  const spinButtonRef = useRef<Nullable<Mesh>>(null);
  const scene = useScene() as BABYLON.Scene;

  useMemo(() => {
    if (_IS_DEV_) {
      const axes = new BABYLON.AxesViewer(scene, 2);
    }

    const spinButtonMaterial = new BABYLON.StandardMaterial(`${name}-material`);
    spinButtonMaterial.diffuseTexture = new BABYLON.Texture(spinButtonTexture, scene);

    const spinButton = BABYLON.MeshBuilder.CreateCylinder(
      'spinButton-Cylinder',
      {
        diameter: 6,
        height: 0.2,
      },
      scene,
    );

    spinButton.material = spinButtonMaterial;

    spinButton.actionManager = new BABYLON.ActionManager(scene);

    const hl = new BABYLON.HighlightLayer('hl1', scene, {
      // isStroke: true,
      blurHorizontalSize: 5,
      blurVerticalSize: 5,
    });

    //ON MOUSE ENTER
    spinButton.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger,
        function (ev) {
          scene.hoverCursor = 'pointer';
          hl.addMesh(spinButton, BABYLON.Color3.White());
        }));

    //ON MOUSE EXIT
    spinButton.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger,
        function (ev) {
          hl.removeMesh(spinButton);
        }));

    // ON CLICK
    spinButton.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,
        function (ev) {
          console.log('click', ev);
          onRouletteStartHandler();
        },
      ),
    );


    setMesh(spinButton);
  }, [name, onRouletteStartHandler, scene]);

  return (
    <>
      {mesh && (
        <mesh
          name={name}
          fromInstance={mesh}
          // ref={spinButtonRef}
          rotation={rotation}
          position={position}
          disposeInstanceOnUnmount
        />
      )}
    </>
  );
};
