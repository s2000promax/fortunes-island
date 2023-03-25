import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextVariant } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title lorem ipsum',
  text: 'Text lorem ipsum',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title lorem ipsum',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Text lorem ipsum',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title lorem ipsum',
  text: 'Text lorem ipsum',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title lorem ipsum',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Text lorem ipsum',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: 'Title lorem ipsum',
  text: 'Text lorem ipsum',
  variant: TextVariant.ERROR,
};
