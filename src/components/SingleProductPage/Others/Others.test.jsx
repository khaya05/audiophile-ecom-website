import { render, screen, within } from '../../../test-utils';
import Others from './Others';

describe('Others', () => {
  const data = [
    {
      slug: 'xx99 mark i',
      name: 'XX99 Mark I',
      image: {
        mobile: '',
        tablet: '',
        desktop: '',
      },
    },
    {
      slug: 'xx59',
      name: 'XX59',
      image: {
        mobile: '',
        tablet: '',
        desktop: '',
      },
    },
    {
      slug: 'zx9',
      name: 'ZX9 Speaker',
      image: {
        mobile: '',
        tablet: '',
        desktop: '',
      },
    },
  ];

  it('renders heading correctly', () => {
    render(<Others others={data} />);
    const heading = screen.getByRole('heading', { name: 'You may also like' });
    expect(heading).toBeInTheDocument();
  });

  it('renders list', () => {
    render(<Others others={data} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  it('renders all other products', () => {
    render(<Others others={data} />);
    const listElement = screen.getByRole('list');
    const { getAllByRole } = within(listElement);
    const listItems = getAllByRole('listitem');
    expect(listItems.length).toBe(3);
  });
});
