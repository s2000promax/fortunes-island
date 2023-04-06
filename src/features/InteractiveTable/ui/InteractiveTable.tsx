import React from 'react';
import { Table } from 'shared/uiKit/3D/Table';
import { GUI3DManager, HolographicButton, PlanePanel } from '@babylonjs/gui';
import { useScene } from 'react-babylonjs';
import { ArcRotateCamera, Scene, TransformNode, Vector3 } from '@babylonjs/core';

interface InteractiveTableProps {
  name?: string;
  position?: Vector3;
}

export const InteractiveTable = (props: InteractiveTableProps) => {
  const {
    name = 'InteractiveTable',
    position,
  } = props;
  const scene = useScene() as Scene;
  const camera = new ArcRotateCamera(
    'cam', -Math.PI / 2, Math.PI / 2, 10, Vector3.Zero());
  const anchor = new TransformNode('', scene);
  anchor.rotation = new Vector3(1.58,0,0);

  // Create the 3D UI manager
  const manager = new GUI3DManager(scene);

  const panel = new PlanePanel();
  panel.margin = 0.015;

  manager.addControl(panel);
  panel.linkToTransformNode(anchor);
  // panel.position.z = -0.6;
  panel.position = new Vector3(0, -5, -0.6);
  panel.columns = 12;
  panel.scaling = new Vector3(2.9, 1.9, 1);
  // Let's add some buttons!
  const addButton = function() {
    const button = new HolographicButton('orientation');
    // button.scaling = new Vector3(3, 0, 2);
    panel.addControl(button);

    button.text = 'Button #' + panel.children.length;
  };

  panel.blockLayout = true;
   for (let index = 0; index < 36; index++) {
     addButton();

   }
  panel.blockLayout = false;

  return (
    <>
      <mesh
        name={name}
        position={position}
      >
        <Table />
      </mesh>
    </>
  );
};
