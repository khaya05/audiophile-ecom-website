import { render, screen, within } from '@testing-library/react';
import Features from './Features';

describe('Features', () => {
  const features = `Experience unrivalled stereo sound thanks to innovative acoustic technology.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds.`;

  const includes = [
    {
      quantity: 2,
      item: 'Earphone unit',
    },
    {
      quantity: 6,
      item: 'Multi-size earplugs',
    },
    {
      quantity: 1,
      item: 'User manual',
    },
    {
      quantity: 1,
      item: 'USB-C charging cable',
    },
    {
      quantity: 1,
      item: 'Travel pouch',
    },
  ];

  it('renders heading correctly', () => {
    render(<Features features={features} includes={includes} />);
    const heading = screen.getByRole('heading', {
      name: 'Features',
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders first paragraph correctly', () => {
    render(<Features features={features} includes={includes} />);
    const firstParagraph = screen.getByText(
      'Experience unrivalled stereo sound thanks to innovative acoustic technology.'
    );
    expect(firstParagraph).toBeInTheDocument();
  });

  it('renders second paragraph correctly', () => {
    render(<Features features={features} includes={includes} />);
    const secondParagraph = screen.getByText(
      'The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds.'
    );
    expect(secondParagraph).toBeInTheDocument();
  });

  it('renders second heading correctly', () => {
    render(<Features features={features} includes={includes} />);
    const heading = screen.getByRole('heading', {
      name: 'In The Box',
    });
    expect(heading).toBeInTheDocument();
  });

  it('renders list correctly', () => {
    render(<Features features={features} includes={includes} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  it('renders all list items correctly', () => {
    render(<Features features={features} includes={includes} />);
    const listElement = screen.getByRole('list');
    const { getAllByRole } = within(listElement);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(5);
  });
});
