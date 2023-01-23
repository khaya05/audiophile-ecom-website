import { render, screen, within } from '../../test-utils';
import Footer from './Footer';

describe('Footer', () => {
  it('logo renders correctly', () => {
    render(<Footer />);
    const logoElement = screen.getByAltText('logo');
    expect(logoElement).toBeInTheDocument();
  });

  it('renders list correctly', () => {
    render(<Footer />);
    const navLinks = screen.getByTestId('navigation links');
    expect(navLinks).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Footer />);
    const listElement = screen.getByTestId('navigation links');
    const { getAllByRole } = within(listElement);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(4);
  });

  it('render about paragraph correctly', () => {
    render(<Footer />);
    const paragraphElement = screen.getByText(
      "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week."
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  it('renders copyright paragraph correctly', () => {
    render(<Footer />);
    const copyrightParagraph = screen.getByText(
      'Copyright 2021. All Rights Reserved'
    );
    expect(copyrightParagraph).toBeInTheDocument();
  });

  it('renders social media links list correctly', () => {
    render(<Footer />);
    const navLinks = screen.getByTestId('social media links');
    expect(navLinks).toBeInTheDocument();
  });

  it('renders all list items correctly', () => {
    render(<Footer />);
    const listElement = screen.getByTestId('social media links');
    const { getAllByRole } = within(listElement);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(3);
  });
});
