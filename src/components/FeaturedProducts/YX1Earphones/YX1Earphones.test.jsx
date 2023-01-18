import { render, screen } from '../../../test-utils';
import YX1Earphones from './YX1Earphones';

describe('YX1Earphones', () => {
  it('product image renders correctly', () => {
    render(<YX1Earphones />);
    const productImage = screen.getByAltText('yx1 earphones');
    expect(productImage).toBeInTheDocument();
  });

  it('heading renders correctly', () => {
    render(<YX1Earphones />);
    const headingElement = screen.getByRole('heading', {
      name: 'yx1 earphones',
    });
    expect(headingElement).toBeInTheDocument();
  });

  it('see product button renders correctly', () => {
    render(<YX1Earphones />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});
