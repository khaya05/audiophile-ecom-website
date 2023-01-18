import { render, screen } from '../../test-utils';
import Audiophile from './Audiophile';

describe('Audiophile', () => {
  it('image renders correctly', () => {
    render(<Audiophile />);
    const imageElement = screen.getByAltText('best gear');
    expect(imageElement).toBeInTheDocument();
  });

  it('heading renders correctly', () => {
    render(<Audiophile />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
  });

  it.skip('paragraph to render correctly', () => {
    render(<Audiophile />);
    const paragraphElement =
      screen.getByText(`Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.`);
    expect(paragraphElement).toBeInTheDocument();
  });
});
