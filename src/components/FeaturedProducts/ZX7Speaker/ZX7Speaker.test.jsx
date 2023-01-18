import { render, screen } from '../../../test-utils';
import ZX7Speaker from './ZX7Speaker';

describe('ZX7Speaker', () => {
  it('renders correctly', () => {
    render(<ZX7Speaker />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
  });

    it('see product button renders correctly', () => {
      render(<ZX7Speaker />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toBeInTheDocument();
    });
});
