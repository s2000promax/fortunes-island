import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { Chips } from './Chips';
import { Canvas } from 'widgets/Canvas';
import { Vector3 } from '@babylonjs/core';
// import { ChipsNominals } from 'entities/InteractiveTable';
import { ChipsNominals } from '../../../../../entities/InteractiveTable';
export default {
  title: 'shared/3D/Chips',
  component: Chips,
  argTypes: {},
} as ComponentMeta<typeof Chips>;

const Template: ComponentStory<typeof Chips> = (args) => {
  return (
    <Canvas>
      <arcRotateCamera
        name="camera1"
        target={new Vector3(0, 0, 2)}
        alpha={Math.PI / 2}
        beta={Math.PI / 4}
        radius={8}
      />
      <hemisphericLight
        name="light1"
        intensity={0.7}
        direction={Vector3.Up()}
      />
      <Chips
        {...args}
      />
    </Canvas>
  );
};

export const C25C = Template.bind({});
C25C.args = {
  nominal: ChipsNominals.CHIP_25_CENTS,
};

export const C50C = Template.bind({});
C50C.args = {
  nominal: ChipsNominals.CHIP_50_CENTS,
};

export const C1D = Template.bind({});
C1D.args = {
  nominal: ChipsNominals.CHIP_1_DOLLAR,
};

export const C5D = Template.bind({});
C5D.args = {
  nominal: ChipsNominals.CHIP_5_DOLLARS,
};

export const C10D = Template.bind({});
C10D.args = {
  nominal: ChipsNominals.CHIP_10_DOLLARS,
};

export const C25D = Template.bind({});
C25D.args = {
  nominal: ChipsNominals.CHIP_25_DOLLARS,
};

export const C50D = Template.bind({});
C50D.args = {
  nominal: ChipsNominals.CHIP_50_DOLLARS,
};

export const C100D = Template.bind({});
C100D.args = {
  nominal: ChipsNominals.CHIP_100_DOLLARS,
};

export const C500D = Template.bind({});
C500D.args = {
  nominal: ChipsNominals.CHIP_500_DOLLARS,
};

export const C1000D = Template.bind({});
C1000D.args = {
  nominal: ChipsNominals.CHIP_1000_DOLLARS,
};

export const C5000D = Template.bind({});
C5000D.args = {
  nominal: ChipsNominals.CHIP_5000_DOLLARS,
};

export const C10000D = Template.bind({});
C10000D.args = {
  nominal: ChipsNominals.CHIP_10000_DOLLARS,
};
