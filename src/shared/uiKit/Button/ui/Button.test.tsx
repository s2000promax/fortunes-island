import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from 'shared/uiKit/Button';
import { VariantButton } from './Button';

describe('Buttons', () => {
  test('Test render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  Object.values(VariantButton).forEach(variant => {
    test(`Test variant Button ${variant}`, () => {
      render(<Button variant={variant}>TEST</Button>);
      expect(screen.getByText('TEST')).toHaveClass(variant);
      screen.debug();
    });
  });
});
