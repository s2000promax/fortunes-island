import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { RouletteCentralElement } from './RouletteCentralElement';
import { Canvas } from 'widgets/Canvas';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { Color3 } from '@babylonjs/core';

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
        target={new Vector3(0, 12, 18)}
        alpha={Math.PI / 2}
        beta={Math.PI / 4}
        radius={8}
      />
      <hemisphericLight
        name="light1"
        intensity={0.7}
        direction={Vector3.Up()}
      />
      <RouletteCentralElement
        {...args}
      />
    </Canvas>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  name: 'RouletteCentralElement',
};
