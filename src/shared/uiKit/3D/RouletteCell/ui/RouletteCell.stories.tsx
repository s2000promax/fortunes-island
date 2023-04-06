import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { RouletteCell } from './RouletteCell';
import { Canvas } from 'widgets/Canvas';
import { Vector3 } from '@babylonjs/core';
import { CellNumber } from '../model/CellsTypes';

export default {
  title: 'shared/3D/RouletteCell',
  component: RouletteCell,
  argTypes: {
    number: CellNumber,
  },
} as ComponentMeta<typeof RouletteCell>;

const Template: ComponentStory<typeof RouletteCell> = (args) => {
  return (
    <Canvas>
      <arcRotateCamera
        name="camera1"
        target={new Vector3(0, 0, 2)}
        alpha={Math.PI / 2}
        beta={Math.PI / 8}
        radius={8}
      />
      <hemisphericLight
        name="light1"
        intensity={0.7}
        direction={Vector3.Up()}
      />
      <RouletteCell
        {...args}
      />
    </Canvas>
  );
};

export const ZeroCell = Template.bind({});
ZeroCell.args = {
  number: CellNumber.Zero, // row: 2, column: 0,
};

export const DoubleZeroCell = Template.bind({});
DoubleZeroCell.args = {
  number: CellNumber.DoubleZero,
  // row: 2, column: 1,
};

export const TwentyEightCell = Template.bind({});
TwentyEightCell.args = {
  number: CellNumber.TwentyEight,
  // row: 1, column: 13,
};

export const ThirtySixCell = Template.bind({});
ThirtySixCell.args = {
  number: CellNumber.ThirtySix,
  // row: 0, column: 17,
};
