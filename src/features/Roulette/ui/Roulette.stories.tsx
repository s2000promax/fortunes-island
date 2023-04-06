import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { Roulette } from './Roulette';
import { Canvas } from 'widgets/Canvas';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { useBeforeRender } from 'react-babylonjs';

export default {
  title: 'features/Roulette',
  component: Roulette,
  argTypes: {
  },
} as ComponentMeta<typeof Roulette>;

const Template: ComponentStory<typeof Roulette> = (args) => {

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
      <Roulette
        {...args}
      />
    </Canvas>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
