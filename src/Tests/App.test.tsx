import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from '../Containers';

describe('App', () => {
  it('renders template text', () => {
    render(<App />);
    expect(screen.getByText('React Typescript template')).toBeInTheDocument();
  });
});
