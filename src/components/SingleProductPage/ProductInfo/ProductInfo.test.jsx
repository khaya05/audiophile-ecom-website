import { render, screen } from '../../../test-utils';
import ProductInfo from './ProductInfo';

describe('ProductInfo', () => {
  const data = {
    id: 1,
    price: 499,
    description:
      'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones.',
    name: 'YX1 Wireless Earphones',
    image: { mobile: '', tablet: '', desktop: '' },
    isNew: true,
    cartImage: '',
    slug: 'yx1',
  };

  it('renders image correctly', () => {
    render(<ProductInfo {...data} />);
    const image = screen.getByAltText(data.name);
    expect(image).toBeInTheDocument();
  });

  it('renders new product label correctly', () => {
    render(<ProductInfo {...data} />);
    const heading = screen.getByRole('heading', { name: 'new product' });
    expect(heading).toBeInTheDocument();
  });

  it('renders product name correctly', () => {
    render(<ProductInfo {...data} />);
    const heading = screen.getByRole('heading', { name: data.name });
    expect(heading).toBeInTheDocument();
  });

  it('renders product description correctly', () => {
    render(<ProductInfo {...data} />);
    const description = screen.getByText(data.description);
    expect(description).toBeInTheDocument();
  });

  it('renders price correctly', () => {
    render(<ProductInfo {...data} />);
    const price = screen.getByText(/499/);
    expect(price).toBeInTheDocument();
  });

  it('renders add-to-cart button correctly', () => {
    render(<ProductInfo {...data} />);
    const button = screen.getByRole('button', { name: 'add to cart' });
    expect(button).toBeInTheDocument();
  });
});
