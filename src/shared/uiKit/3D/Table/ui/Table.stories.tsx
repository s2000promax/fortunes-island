import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { Table } from './Table';
import { Canvas } from 'widgets/Canvas';
import { Vector3 } from '@babylonjs/core';

export default {
  title: 'shared/3D/Table',
  component: Table,
  argTypes: {},
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => {
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
      <Table
        {...args}
      />
    </Canvas>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
