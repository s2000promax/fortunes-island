import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import '@babylonjs/core/Physics/physicsEngineComponent';
import { Canvas } from '@/widgets/Canvas';
import { PhysicsImpostor, Vector3 } from '@babylonjs/core';
import { RouletteCell } from './RouletteCell';
import { CellNumber } from '@/entities/Roulette';

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
        target={new Vector3(0, 0, 1)}
        alpha={Math.PI / 2}
        beta={Math.PI / 16}
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
  number: CellNumber.Zero,
  cellImpostorHandler: (impostor: PhysicsImpostor) => {},
  position: new Vector3(0,0,0),
};

export const DoubleZeroCell = Template.bind({});
DoubleZeroCell.args = {
  number: CellNumber.DoubleZero,
  cellImpostorHandler: (impostor: PhysicsImpostor) => {},
  position: new Vector3(0,0,0),
};

export const TwentyEightCell = Template.bind({});
TwentyEightCell.args = {
  number: CellNumber.TwentyEight,
  cellImpostorHandler: (impostor: PhysicsImpostor) => {},
  position: new Vector3(0,0,0),
};

export const ThirtySixCell = Template.bind({});
ThirtySixCell.args = {
  number: CellNumber.ThirtySix,
  cellImpostorHandler: (impostor: PhysicsImpostor) => {},
  position: new Vector3(0,0,0),
};
