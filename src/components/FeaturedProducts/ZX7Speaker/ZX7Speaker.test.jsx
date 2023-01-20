import { render, screen } from '../../../test-utils';
import ZX7Speaker from './ZX7Speaker';
import user from '@testing-library/user-event';

describe('ZX7Speaker', () => {
  it('renders correctly', () => {
    render(<ZX7Speaker />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
  });

  it('see product button renders correctly', () => {
    render(<ZX7Speaker />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('when see product button is clicked, page navigates to the product page', async () => {
    user.setup();

    render(<ZX7Speaker />);
    const buttonElement = screen.getByRole('button');
    await user.click(buttonElement);

    const productNameElement = screen.queryByRole('heading', {
      level: 2,
    });
    expect(productNameElement).toBeInTheDocument();
  });
});
