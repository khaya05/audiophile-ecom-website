import { render, screen } from '../../test-utils';
import Cart from './Cart';

describe('Cart', () => {
  it('heading renders correctly when cart is empty', () => {
    render(<Cart />);
    const headingElement = screen.getByRole('heading', {
      level: 3,
      name: 'cart (0)',
    });
    expect(headingElement).toBeInTheDocument();
  });

  it('paragraph renders correctly when cart is empty', () => {
    render(<Cart />);
    const paragraphElement = screen.getByText('your cart is currently empty');
    expect(paragraphElement).toBeInTheDocument();
  });
});
