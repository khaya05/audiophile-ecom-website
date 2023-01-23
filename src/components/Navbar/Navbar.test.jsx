import { render, screen } from '../../test-utils';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders button correctly', () => {
    render(<Navbar />);
    const mobileMenuButton = screen.getByRole('button', {
      name: 'mobile toggle menu',
    });
    expect(mobileMenuButton).toBeInTheDocument();
  });

  it('renders logo', () => {
    render(<Navbar />);
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders cart correctly', () => {
    render(<Navbar />);
    const cartButton = screen.getByRole('button', {
      name: 'cart',
    });
    expect(cartButton).toBeInTheDocument();
  });
});
