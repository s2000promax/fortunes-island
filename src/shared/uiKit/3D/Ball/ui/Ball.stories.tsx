import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { Ball } from './Ball';
import { Canvas } from 'widgets/Canvas';
import { Color3, Vector3 } from '@babylonjs/core';

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
      {/*<Ball />*/}
    </Canvas>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
