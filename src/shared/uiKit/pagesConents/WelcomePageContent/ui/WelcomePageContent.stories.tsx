import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { WelcomePageContent } from './WelcomePageContent';

export default {
  title: 'shared/PagesContent/WelcomePageContent',
  component: WelcomePageContent,
  argTypes: {
  },
} as ComponentMeta<typeof WelcomePageContent>;

const Template: ComponentStory<typeof WelcomePageContent> = (args) => <WelcomePageContent {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
