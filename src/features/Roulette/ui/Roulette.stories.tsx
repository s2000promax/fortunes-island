import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { Roulette } from './Roulette';
import { Canvas } from '@/widgets/Canvas';
import { Vector3 } from '@babylonjs/core';
import '@babylonjs/core/Physics/physicsEngineComponent';
import { RotatingDirection } from '@/entities/Roulette';

export default {
  title: 'features/Roulette',
  component: Roulette,
  argTypes: {},
} as ComponentMeta<typeof Roulette>;

const Template: ComponentStory<typeof Roulette> = (args) => {
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
        direction={Vector3.Up()}
      />
      <Roulette {...args} />
    </Canvas>
  );
};

export const СlockwiseRotation = Template.bind({});
СlockwiseRotation.args = {
  isRouletteRotating: false,
  rotateDirection: RotatingDirection.Сlockwise,
  onAddTemporaryDrawnNumberHandler: (num: string) => {},
};

export const СounterСlockwiseRotation = Template.bind({});
СounterСlockwiseRotation.args = {
  isRouletteRotating: false,
  rotateDirection: RotatingDirection.СounterСlockwise,
  onAddTemporaryDrawnNumberHandler: (num: string) => {},
};
