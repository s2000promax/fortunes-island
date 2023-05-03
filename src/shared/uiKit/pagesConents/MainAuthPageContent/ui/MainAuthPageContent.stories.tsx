import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { MainAuthPageContent } from './MainAuthPageContent';

export default {
  title: 'shared/PagesContent/MainAuthPageContent',
  component: MainAuthPageContent,
  argTypes: {
  },
} as ComponentMeta<typeof MainAuthPageContent>;

const Template: ComponentStory<typeof MainAuthPageContent> = (args) => <MainAuthPageContent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  user: { authData: {} },
})];
