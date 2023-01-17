import { render, screen } from '@testing-library/react';
import YX1Earphones from './YX1Earphones';

// TODO: check how to test components that uses react-router

describe('YX1Earphones', () => {
  it('product image renders correctly', () => {
    render(<YX1Earphones />);
    const productImage = screen.getByAltText('yx1 earphones');
    expect(productImage).toBeInTheDocument();
  });

  it('image renders correctly', () => {
    render(<YX1Earphones />);
    const headingElement = screen.getByRole('heading', {
      name: 'yx1 earphones',
    });
    expect(headingElement).toBeInTheDocument();
  });
});
