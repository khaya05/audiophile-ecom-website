import { render, screen } from '../../test-utils';
import Footer from './Footer';
import user from '@testing-library/user-event';

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
    // expect(navLinks).toHaveLength(3);
  });

  it.skip('renders a list of navigation links', () => {
    render(<Footer />);
    const listItemElements = screen.getByRole('listitem', {
      name: 'earphones',
    });
    expect(listItemElements).toBeInTheDocument();
  });

  it.skip('navigate to headphones page when user clicks "headphones" nav link', async () => {
    user.setup();
    render(<Footer />);
    const headphonesLink = screen.getByRole('link', { name: 'headphones' });
    expect(headphonesLink).toBeInTheDocument();

    await user.click(headphonesLink);
    const pageHeading = screen.getByRole('heading', {
      name: 'headphones',
      level: 2,
    });
    expect(pageHeading).toBeInTheDocument();
  });

  it.skip('navigate to earphones page when user clicks "earphones" nav link', async () => {
    user.setup();
    render(<Footer />);
    const earphonesLink = screen.getByRole('link', { name: 'earphones' });
    expect(earphonesLink).toBeInTheDocument();

    await user.click(earphonesLink);
    const pageHeading = screen.getByRole('heading', {
      name: 'earphones',
      level: 2,
    });
    expect(pageHeading).toBeInTheDocument();
  });

  it.skip('navigate to speakers page when user clicks "speakers" nav link', async () => {
    user.setup();
    render(<Footer />);
    const speakersLink = screen.getByRole('link', { name: 'speakers' });
    expect(speakersLink).toBeInTheDocument();

    await user.click(speakersLink);
    const pageHeading = screen.getByRole('heading', {
      name: 'speakers',
      level: 2,
    });
    expect(pageHeading).toBeInTheDocument();
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
    // expect(navLinks).toHaveLength(3);
  });
});
