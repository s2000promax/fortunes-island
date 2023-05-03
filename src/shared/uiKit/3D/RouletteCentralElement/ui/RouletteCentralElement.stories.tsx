import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { RouletteCentralElement } from './RouletteCentralElement';
import { Canvas } from '@/widgets/Canvas';
import { Vector3 } from '@babylonjs/core';

export default {
  title: 'shared/3D/RouletteCentralElement',
  component: RouletteCentralElement,
  argTypes: {},
} as ComponentMeta<typeof RouletteCentralElement>;

const Template: ComponentStory<typeof RouletteCentralElement> = (args) => {
  return (
    <Canvas>
      <arcRotateCamera
        name="camera1"
        target={new Vector3(0,0,3)}
        alpha={Math.PI / 2}
        beta={Math.PI / 4}
        radius={20}
      />
      <hemisphericLight
        name="light1"
        intensity={0.7}
        direction={new Vector3(0, 10, -2)}
      />
      <RouletteCentralElement {...args} />
    </Canvas>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
