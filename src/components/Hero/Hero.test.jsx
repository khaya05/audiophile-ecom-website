import { render, screen } from '../../test-utils';
import Hero from './Hero';

describe('Hero', () => {
  it('new product heading renders correctly', () => {
    render(<Hero />);
    const headingElement = screen.getByRole('heading', { level: 4 });
    expect(headingElement).toBeInTheDocument();
  });

  it('heading renders correctly', () => {
    render(<Hero />);
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toBeInTheDocument();
  });

  it('paragraph renders', () => {
    render(<Hero />);
    const paragraphElement = screen.getByRole('paragraph');
    expect(paragraphElement).toBeInTheDocument();
  });

  it('see product button renders', () => {
    render(<Hero />);
    const buttonElement = screen.getByRole('button', { name: 'see product' });
    expect(buttonElement).toBeInTheDocument();
  });
});
