import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { RouletteBody } from './RouletteBody';
import { Canvas } from '@/widgets/Canvas';
import { Vector3 } from '@babylonjs/core';

export default {
  title: 'shared/3D/RouletteBody',
  component: RouletteBody,
  argTypes: {},
} as ComponentMeta<typeof RouletteBody>;

const Template: ComponentStory<typeof RouletteBody> = (args) => {
  return (
    <Canvas>
      <arcRotateCamera
        name="camera1"
        target={new Vector3(0,0,5)}
        alpha={Math.PI / 2}
        beta={Math.PI / 8}
        radius={40}
      />
      <hemisphericLight
        name="light1"
        intensity={0.7}
        direction={new Vector3(0, 5, 5)}
      />
      <RouletteBody {...args} />
    </Canvas>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
