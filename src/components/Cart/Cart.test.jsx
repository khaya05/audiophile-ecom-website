import { render, screen } from '../../test-utils';
import Cart from './Cart';

describe('Cart', () => {
  it('renders correctly', () => {
    render(<Cart />);
    const headingElement = screen.getByRole('heading', {
      level: 3,
      name: 'cart (0)',
    });
    expect(headingElement).toBeInTheDocument();
  });
});
