import { render, screen } from '../../test-utils';
import Hero from './Hero';
import user from '@testing-library/user-event';

describe('Hero', () => {
  it('new product heading renders correctly', () => {
    render(<Hero />);
    const headingElement = screen.getByRole('heading', {
      level: 4,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it('heading renders correctly', () => {
    render(<Hero />);
    const headingElement = screen.getByRole('heading', {
      level: 1,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it('paragraph renders', () => {
    render(<Hero />);
    const paragraphElement = screen.getByText(
      'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.'
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  it('see product button renders', () => {
    render(<Hero />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});
