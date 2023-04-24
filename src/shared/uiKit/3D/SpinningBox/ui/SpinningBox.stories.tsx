import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { SpinningBox } from './SpinningBox';
import { Canvas } from 'widgets/Canvas';
import { Color3, Vector3 } from '@babylonjs/core';

export default {
  title: 'shared/3D/SpinningBox',
  component: SpinningBox,
  argTypes: {},
} as ComponentMeta<typeof SpinningBox>;

const Template: ComponentStory<typeof SpinningBox> = (args) => {
  return (
    <Canvas>
      <arcRotateCamera
        name="camera1"
        target={Vector3.Zero()}
        alpha={Math.PI / 2}
        beta={Math.PI / 4}
        radius={8}
      />
      <hemisphericLight
        name="light1"
        intensity={0.7}
        direction={Vector3.Up()}
      />
      <SpinningBox
        name={'SpinningBox'}
        size={2}
        position={new Vector3(-2, 0, 0)}
        hoveredColor={Color3.FromHexString('#C26DBC')}
        color={Color3.FromHexString('#EEB5EB')}
      />
    </Canvas>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
