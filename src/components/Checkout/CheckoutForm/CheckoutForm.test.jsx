import { render, screen } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';

describe('CheckoutForm', () => {
  it('heading renders correctly', () => {
    render(<CheckoutForm />);
    const headingElement = screen.getByRole('heading', {
      name: 'checkout (demo)',
    });
    expect(headingElement).toBeInTheDocument();
  });
});
