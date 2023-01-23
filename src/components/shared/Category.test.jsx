import { render, screen } from '../../test-utils';
import Category from './Category';

describe('Category', () => {
  const data = {
    img: '',
    name: 'headphones',
  };

  it('renders image', () => {
    render(<Category {...data} />);
    const image = screen.getByAltText('category');
    expect(image).toBeInTheDocument();
  });

  it('renders heading', () => {
    render(<Category {...data} />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  it('renders shop button', () => {
    render(<Category {...data} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
