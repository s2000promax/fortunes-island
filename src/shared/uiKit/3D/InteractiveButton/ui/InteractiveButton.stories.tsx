import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { InteractiveButton } from './InteractiveButton';
import { Canvas } from '@/widgets/Canvas';
import { Vector3 } from '@babylonjs/core';
import { BetsIdTypes, BetsNumbers } from '@/entities/InteractiveTable';
import { InteractiveButtonSize } from '@/shared/uiKit/3D/InteractiveButton';

export default {
  title: 'shared/3D/InteractiveButton',
  component: InteractiveButton,
  argTypes: {},
} as ComponentMeta<typeof InteractiveButton>;

const Template: ComponentStory<typeof InteractiveButton> = (args) => {
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
        direction={new Vector3(0, 3, -2)}
      />
      <InteractiveButton {...args} />
    </Canvas>
  );
};

export const SizeOneRed = Template.bind({});
SizeOneRed.args = {
  size: InteractiveButtonSize.SIZE1,
  col: 0,
  onClickHandler: (id: BetsIdTypes) => {},
  onHoverHandler: (id: BetsIdTypes) => {},
  onRemoveHoverHandler: () => {},
};

export const SizeOneBlack = Template.bind({});
SizeOneBlack.args = {
  size: InteractiveButtonSize.SIZE1,
  col: 0,
  row: 1,
  onClickHandler: (id: BetsIdTypes) => {},
  onHoverHandler: (id: BetsIdTypes) => {},
  onRemoveHoverHandler: () => {},
};

export const SizeTwoEven = Template.bind({});
SizeTwoEven.args = {
  size: InteractiveButtonSize.SIZE2,
  col: 1,
  onClickHandler: (id: BetsIdTypes) => {},
  onHoverHandler: (id: BetsIdTypes) => {},
  onRemoveHoverHandler: () => {},
};

export const SizeTwoRed = Template.bind({});
SizeTwoRed.args = {
  size: InteractiveButtonSize.SIZE2,
  col: 2,
  onClickHandler: (id: BetsIdTypes) => {},
  onHoverHandler: (id: BetsIdTypes) => {},
  onRemoveHoverHandler: () => {},
};

export const SizeTwoBlack = Template.bind({});
SizeTwoBlack.args = {
  size: InteractiveButtonSize.SIZE2,
  col: 3,
  onClickHandler: (id: BetsIdTypes) => {},
  onHoverHandler: (id: BetsIdTypes) => {},
  onRemoveHoverHandler: () => {},
};

export const SizeFour = Template.bind({});
SizeFour.args = {
  size: InteractiveButtonSize.SIZE4,
  col: 0,
  onClickHandler: (id: BetsIdTypes) => {},
  onHoverHandler: (id: BetsIdTypes) => {},
  onRemoveHoverHandler: () => {},
};

export const Size21 = Template.bind({});
Size21.args = {
  size: InteractiveButtonSize.SIZE21,
  col: 6,
  onClickHandler: (id: BetsIdTypes) => {},
  onHoverHandler: (id: BetsIdTypes) => {},
  onRemoveHoverHandler: () => {},
};

export const SizeZero = Template.bind({});
SizeZero.args = {
  size: InteractiveButtonSize.SIZE0,
  col: 0,
  row: 2,
  onClickHandler: (id: BetsIdTypes) => {},
  onHoverHandler: (id: BetsIdTypes) => {},
  onRemoveHoverHandler: () => {},
};

export const SizeZeroDouble = Template.bind({});
SizeZeroDouble.args = {
  size: InteractiveButtonSize.SIZE0,
  col: 1,
  row: 2,
  onClickHandler: (id: BetsIdTypes) => {},
  onHoverHandler: (id: BetsIdTypes) => {},
  onRemoveHoverHandler: () => {},
};
