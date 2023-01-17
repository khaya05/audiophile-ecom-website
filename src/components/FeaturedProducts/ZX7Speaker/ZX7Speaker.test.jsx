import { render, screen } from '@testing-library/react';
import ZX7Speaker from './ZX7Speaker';

describe('ZX7Speaker', () => {
  it('renders correctly', () => {
    render(<ZX7Speaker />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
  });
});
