import { render, screen } from '../../../test-utils';
import ZX9Speaker from './ZX9Speaker';

describe('ZX9Speaker', () => {
  it('product image renders correctly', () => {
    render(<ZX9Speaker />);
    const imageElement = screen.getByAltText('zx9 speaker');
    expect(imageElement).toBeInTheDocument();
  });

  it('heading renders correctly', () => {
    render(<ZX9Speaker />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
  });

  it('paragraph renders correctly', () => {
    render(<ZX9Speaker />);
    const paragraphElement = screen.getByText(
      'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.'
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  it('see product button renders correctly', () => {
    render(<ZX9Speaker />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});
