import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { SpinButton } from './SpinButton';
import { Canvas } from '@/widgets/Canvas';
import { Vector3 } from '@babylonjs/core';

export default {
  title: 'shared/3D/SpinButton',
  component: SpinButton,
  argTypes: {},
} as ComponentMeta<typeof SpinButton>;

const Template: ComponentStory<typeof SpinButton> = (args) => {
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
        direction={new Vector3(0, 3, -1)}
      />
      <SpinButton {...args} />
    </Canvas>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
