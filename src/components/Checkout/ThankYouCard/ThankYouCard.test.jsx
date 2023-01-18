import { render, screen } from '../../../test-utils';
import ThankYouCard from './ThankYouCard';

describe('ThankYouCart', () => {
  it('heading renders correctly', () => {
    render(<ThankYouCard />);
    const headingElement = screen.getByRole('heading', { level: 3 });
    expect(headingElement).toBeInTheDocument();
  });

  it('paragraph renders correctly', () => {
    render(<ThankYouCard />);
    const paragraphElement = screen.getByText(
      'You will receive an email confirmation shortly.'
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  it('list renders correctly', () => {
    render(<ThankYouCard />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  it.skip('list items renders correctly', () => {
    render(<ThankYouCard />);
    const listItemElement = screen.queryByRole('listitem') 
    expect(listItemElement).toBeInTheDocument()
  })

   it('grand total paragraph renders correctly', () => {
     render(<ThankYouCard />);
     const paragraphElement = screen.getByText(
       'grand total'
     );
     expect(paragraphElement).toBeInTheDocument();
   });

  it('back home button renders', () => {
    render(<ThankYouCard />)
    const buttonElement = screen.getByRole("button", { name: 'back home' })
    expect(buttonElement).toBeInTheDocument()
  })
});
