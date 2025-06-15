import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../../app/page';

test('renders home page without crashing', () => {
  const { container } = render(<Home />);
  expect(container).toBeInTheDocument();
});
