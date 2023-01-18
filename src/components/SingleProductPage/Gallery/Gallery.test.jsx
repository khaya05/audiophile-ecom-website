import { render, screen } from '@testing-library/react';
import Gallery from './Gallery';

describe('Gallery', () => {
  it('Gallery renders correctly', () => {
    render(<Gallery />);

    const firstImageElement = screen.getByAltText('first');
    expect(firstImageElement).toBeInTheDocument();

    const secondImageElement = screen.getByAltText('second');
    expect(secondImageElement).toBeInTheDocument();

    const thirdImageElement = screen.getByAltText('third');
    expect(thirdImageElement).toBeInTheDocument();
  });
});
