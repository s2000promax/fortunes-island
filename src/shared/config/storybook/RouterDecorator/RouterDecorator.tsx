import '@/app/styles/index.scss';
import { type Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ReactNode } from 'react';

export const RouterDecorator = (story: () => Story) => {
  const storyChildren = story() as unknown as ReactNode;
  return (
    <BrowserRouter>
      {storyChildren}
    </BrowserRouter>
  );
};
