import { render, screen } from '@testing-library/react';
import Gallery from './Gallery';

describe('Gallery', () => {
  const gallery = {
    first: {
      mobile: '',
      tablet: '',
      desktop: '',
    },
    second: {
      mobile: '',
      tablet: '',
      desktop: '',
    },
    third: {
      mobile: '',
      tablet: '',
      desktop: '',
    },
  };

  it('Gallery renders correctly', () => {
    render(<Gallery gallery={gallery} />);

    const firstImageElement = screen.getByAltText('first');
    expect(firstImageElement).toBeInTheDocument();

    const secondImageElement = screen.getByAltText('second');
    expect(secondImageElement).toBeInTheDocument();

    const thirdImageElement = screen.getByAltText('third');
    expect(thirdImageElement).toBeInTheDocument();
  });
});
