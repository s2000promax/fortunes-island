import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { Ball } from './Ball';
import { Canvas } from '@/widgets/Canvas';
import { Vector3 } from '@babylonjs/core';

export default {
  title: 'shared/3D/Ball',
  component: Ball,
  argTypes: {},
} as ComponentMeta<typeof Ball>;

const Template: ComponentStory<typeof Ball> = (args) => {
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
        direction={new Vector3(0, 3, -2)}
      />
      <Ball {...args} />
    </Canvas>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
