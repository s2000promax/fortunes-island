import React from 'react';
import { Table } from 'shared/uiKit/3D/Table';
import { useScene } from 'react-babylonjs';
import { Scene, Vector3 } from '@babylonjs/core';
import { InteractiveButton } from 'shared/uiKit/3D/InteractiveButton';
import { InteractiveButtonSize } from 'shared/uiKit/3D/InteractiveButton/model/types';

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


  return (
    <>
      <mesh
        name={name}
        position={position}
      >
        <Table />
        <InteractiveButton
          name={'one'}
          size={InteractiveButtonSize.SIZE1}
          position={new Vector3(18 - 1.5, 0.61, -8 + 1)}
        />
        <InteractiveButton
          name={'zero'}
          size={InteractiveButtonSize.SIZE0}
          position={new Vector3(21 - 1.5, 0.61, -8 + 1)}
        />
        <InteractiveButton
          name={'two_one'}
          size={InteractiveButtonSize.SIZE21}
          position={new Vector3(-18-2, 0.61, -8 + 1)}
        />
        <InteractiveButton
          name={'two'}
          size={InteractiveButtonSize.SIZE2}
          position={new Vector3(18-3, 0.61, 2 - 1)}
        />
        <InteractiveButton
          name={'four'}
          size={InteractiveButtonSize.SIZE4}
          position={new Vector3(18-6, 0.61, 0 - 1)}
        />
      </mesh>
    </>
  );
};


/*
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
 */
