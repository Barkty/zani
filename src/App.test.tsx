import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home screen', () => {
  render(<App />);
  const homeScreen = screen.queryAllByTestId('home');
  expect(homeScreen).toBeTruthy();
});
