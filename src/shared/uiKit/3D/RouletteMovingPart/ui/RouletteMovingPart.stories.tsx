import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { RouletteMovingPart } from './RouletteMovingPart';
import { Canvas } from '@/widgets/Canvas';
import { PhysicsImpostor, Vector3 } from '@babylonjs/core';

export default {
  title: 'shared/3D/RouletteMovingPart',
  component: RouletteMovingPart,
  argTypes: {},
} as ComponentMeta<typeof RouletteMovingPart>;

const Template: ComponentStory<typeof RouletteMovingPart> = (args) => {
  return (
    <Canvas>
      <arcRotateCamera
        name="camera1"
        target={new Vector3(0,0,5)}
        alpha={Math.PI / 2}
        beta={Math.PI / 4}
        radius={20}
      />
      <hemisphericLight
        name="light1"
        intensity={0.7}
        direction={new Vector3(0, 5, -2)}
      />
      <RouletteMovingPart {...args} />
    </Canvas>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  cellImpostorHandler: (impostor: PhysicsImpostor) => {},
};
