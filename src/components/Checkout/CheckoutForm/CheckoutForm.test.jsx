import { render, screen } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';
import user from '@testing-library/user-event';

describe('CheckoutForm', () => {
  it('H2 heading renders correctly', () => {
    render(<CheckoutForm />);
    const headingElement = screen.getByRole('heading', {
      name: 'checkout (demo)',
    });
    expect(headingElement).toBeInTheDocument();
  });

  it('input field heading renders correctly', () => {
    render(<CheckoutForm />);
    const headingElement = screen.getByRole('heading', {
      name: 'billing info',
    });
    expect(headingElement).toBeInTheDocument();
  });

  it('name input renders correctly', () => {
    render(<CheckoutForm />);
    const inputElement = screen.getByPlaceholderText('Alex Ward');
    expect(inputElement).toBeInTheDocument();
  });

  it('email input renders correctly', () => {
    render(<CheckoutForm />);
    const inputElement = screen.getByPlaceholderText('alexie@email.com');
    expect(inputElement).toBeInTheDocument();
  });

  it('phone input renders correctly', () => {
    render(<CheckoutForm />);
    const inputElement = screen.getByPlaceholderText('+1 202-555-0123');
    expect(inputElement).toBeInTheDocument();
  });

  it('address input renders correctly', () => {
    render(<CheckoutForm />);
    const inputElement = screen.getByPlaceholderText('1137 Williams Avenue');
    expect(inputElement).toBeInTheDocument();
  });

  it('zipCode input renders correctly', () => {
    render(<CheckoutForm />);
    const inputElement = screen.getByPlaceholderText('10002');
    expect(inputElement).toBeInTheDocument();
  });

  it('city input renders correctly', () => {
    render(<CheckoutForm />);
    const inputElement = screen.getByPlaceholderText('New York');
    expect(inputElement).toBeInTheDocument();
  });

  it('country input renders correctly', () => {
    render(<CheckoutForm />);
    const inputElement = screen.getByPlaceholderText('United States');
    expect(inputElement).toBeInTheDocument();
  });

  it('radio button renders correctly', () => {
    render(<CheckoutForm />);

    const eMoneyRadioElement = screen.getByLabelText('e-Money');
    expect(eMoneyRadioElement).toBeInTheDocument();

    const cashRadioElement = screen.getByLabelText('cash on delivery');
    expect(cashRadioElement).toBeInTheDocument();
  });

  it("eMoney input fields don't render", () => {
    render(<CheckoutForm />);

    const eMoneyNumberInput = screen.queryByPlaceholderText('238519663');
    expect(eMoneyNumberInput).not.toBeInTheDocument();

    const eMoneyPinInput = screen.queryByPlaceholderText('9663');
    expect(eMoneyPinInput).not.toBeInTheDocument();
  });

  it("cash on delivery info don't render", () => {
    render(<CheckoutForm />);
    const paragraphElement = screen.queryByRole('paragraph');
    expect(paragraphElement).not.toBeInTheDocument();
  });

  it('eMoney pin and eMoney number inputs renders  when user clicks on eMoney option', async () => {
    user.setup();
    render(<CheckoutForm />);

    const eMoneyRadioElement = screen.getByLabelText('e-Money');
    await user.click(eMoneyRadioElement);

    const eMoneyPinInput = screen.getByPlaceholderText('9663');
    expect(eMoneyPinInput).toBeInTheDocument();

    const eMoneyNumberInput = screen.getByPlaceholderText('238519663');
    expect(eMoneyNumberInput).toBeInTheDocument();
  });
});
