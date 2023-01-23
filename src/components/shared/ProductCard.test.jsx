import { render, screen } from '../../test-utils';
import ProductCard from './ProductCard';

describe('Product', () => {
  const data = {
    product: {
      id: 1,
      name: 'YX1 Wireless Earphones',
      image: {
        mobile: '',
        tablet: '',
        desktop: '',
      },
      categoryImage: {
        tablet: '',
      },
      new: true,
      description:
        'Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
    },
    index: 1,
  };

  it('renders product image', () => {
    render(<ProductCard {...data} />);
    const image = screen.getByAltText('product');
    expect(image).toBeInTheDocument();
  });

  it('renders "new product" label', () => {
    render(<ProductCard {...data} />);
    const label = screen.getByRole('heading', { level: 4 });
    expect(label).toBeInTheDocument();
  });

  it('renders product name', () => {
    render(<ProductCard {...data} />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
  });

  it('renders product description', () => {
    render(<ProductCard {...data} />);
    const description = screen.getByText(
      'Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'
    );
    expect(description).toBeInTheDocument();
  });

  it('renders button', () => {
    render(<ProductCard {...data} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
