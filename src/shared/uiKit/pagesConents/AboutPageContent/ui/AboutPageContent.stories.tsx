import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { AboutPageContent } from './AboutPageContent';

export default {
  title: 'shared/PagesContent/AboutPageContent',
  component: AboutPageContent,
  argTypes: {
  },
} as ComponentMeta<typeof AboutPageContent>;

const Template: ComponentStory<typeof AboutPageContent> = (args) => <AboutPageContent {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
