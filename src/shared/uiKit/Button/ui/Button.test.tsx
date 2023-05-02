import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@/shared/uiKit/Button';
import { VariantButton } from './Button';

describe('Buttons', () => {
  test('Test render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Test clear theme', () => {
    render(<Button variant={VariantButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
