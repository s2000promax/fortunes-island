import React from 'react';
import { Table } from 'shared/uiKit/3D/Table';
import { useScene } from 'react-babylonjs';
import { Scene, Vector3 } from '@babylonjs/core';
import { InteractiveButton, InteractiveButtonSize } from 'shared/uiKit/3D/InteractiveButton';
import { TableCoordinates } from '../utils/utils';
import { Chips, ChipSizes } from 'shared/uiKit/3D/Chips';
import { SpinButton } from 'shared/uiKit/3D/SpinButton';

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
        {
          TableCoordinates.map((el, index) =>
            (
              <InteractiveButton
                key={`oneSizeButton-${index}`}
                name={`oneSizeButton-${index}`}
                size={InteractiveButtonSize.SIZE1}
                row={el.row}
                col={el.column}
                position={new Vector3(16.5 - el.dx, 0.61, -3 - el.dz)}
              />
            ))
        }
        {
          Array(3).fill(0).map((el, index) => (
            <InteractiveButton
              key={`fourSizeButton-${index}`}
              name={`fourSizeButton-${index}`}
              size={InteractiveButtonSize.SIZE4}
              col={index}
              position={new Vector3(12 - (index * 12), 0.61, -1)}
            />
          ))
        }
        {
          Array(6).fill(0).map((el, index) => (
            <InteractiveButton
              key={`twoSizeButton-${index}`}
              name={`twoSizeButton-${index}`}
              size={InteractiveButtonSize.SIZE2}
              col={index}
              position={new Vector3(15 - (index * 6), 0.61, 1)}
            />
          ))
        }
        {
          Array(2).fill(0).map((el, index) => (
            <InteractiveButton
              key={`ZeroSizeButton-${index}`}
              name={`ZeroSizeButton-${index}`}
              size={InteractiveButtonSize.SIZE0}
              row={2}
              col={index}
              position={new Vector3(19.5, 0.61, -6 + (index * 3))}
            />
          ))
        }
        {
          Array(3).fill(0).map((el, index) => (
            <InteractiveButton
              key={`Two-oneSizeButton-${index}`}
              name={`Two-oneSizeButton-${index}`}
              size={InteractiveButtonSize.SIZE21}
              col={6}
              position={new Vector3(-20, 0.61, -7 + (index * 2))}
            />
          ))
        }
        {
          ChipSizes.map((chip, index) => (
            <Chips
              key={`ZeroSizeButton-${chip.nominal}`}
              nominal={chip.nominal}
              position={new Vector3(16.5 - (index * 3), 0.61, 6)}
            />
          ))
        }
        <SpinButton
          position={new Vector3(-24, 0.61, 5)}
        />
      </mesh>
    </>
  );
};
