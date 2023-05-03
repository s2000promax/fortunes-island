import React, { type ReactElement } from 'react';
import { AboutPageContent } from '@/shared/uiKit/pagesConents/AboutPageContent';

const AboutPage = (): ReactElement => {

  return (
    <div data-testid={'AboutPage'}>
      <AboutPageContent />
    </div>
  );
};

export default AboutPage;
