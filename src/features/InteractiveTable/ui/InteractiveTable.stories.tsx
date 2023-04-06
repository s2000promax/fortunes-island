import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { InteractiveTable } from './InteractiveTable';
import { Canvas } from 'widgets/Canvas';
import { Vector3 } from '@babylonjs/core';

export default {
  title: 'features/InteractiveTable',
  component: InteractiveTable,
  argTypes: {},
} as ComponentMeta<typeof InteractiveTable>;

const Template: ComponentStory<typeof InteractiveTable> = (args) => {
  return (
    <Canvas>
      <arcRotateCamera
        name="camera1"
        target={new Vector3(0, 0, 10)}
        alpha={Math.PI / 2}
        beta={Math.PI / 6}
        radius={40}
      />
      <hemisphericLight
        name="light1"
        intensity={0.7}
        direction={Vector3.Up()}
      />
      <InteractiveTable
        {...args}
      />
    </Canvas>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
