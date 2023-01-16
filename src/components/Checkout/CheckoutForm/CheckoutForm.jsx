import { useState } from 'react';
import styled from 'styled-components';
import FormInput from '../FormInput/FormInput';
import { ReactComponent as CashIcon } from '../../../assets/checkout/icon-cash-on-delivery.svg';

function CheckoutForm() {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    paymentMethod: '',
    eMoneyPin: '',
    eMoneyNumber: '',
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCustomer((oldVal) => {
      return {
        ...oldVal,
        [name]: value,
      };
    });
  };

  return (
    <Form>
      <h2>checkout (demo)</h2>
      <form>
        <h3>billing info</h3>
        <fieldset>
          <div className="input-container">
            <FormInput
              onChange={handleChange}
              label="name"
              name="name"
              type="text"
              required={true}
              placeholder="Alex Ward"
            />

            <FormInput
              onChange={handleChange}
              label="email address"
              name="email"
              type="email"
              required={true}
              placeholder="alexie@email.com"
            />
          </div>

          <FormInput
            onChange={handleChange}
            label="phone number"
            name="phone"
            type="text"
            required={true}
            placeholder="+1 202-555-0123"
          />
        </fieldset>

        <h3>shipping info</h3>
        <fieldset>
          <FormInput
            onChange={handleChange}
            label="address"
            name="address"
            type="text"
            required={true}
            placeholder="1137 Williams Avenue"
          />

          <div className="input-container">
            <FormInput
              onChange={handleChange}
              label="zip code"
              name="zipCode"
              type="text"
              required={true}
              placeholder=" 10002"
            />

            <FormInput
              onChange={handleChange}
              label="city"
              name="city"
              type="text"
              required={true}
              placeholder="New York"
            />
          </div>

          <FormInput
            onChange={handleChange}
            label="country"
            name="country"
            type="text"
            required={true}
            placeholder="United States"
          />
        </fieldset>

        <h3>payment details</h3>
        <fieldset>
          <div className="input-container">
            <h5>payment method</h5>
            <div>
              <label htmlFor="eMoney" className="radio-label">
                <input
                  type="radio"
                  name="paymentMethod"
                  id="eMoney"
                  value={'eMoney'}
                  onChange={handleChange}
                />
                e-Money
              </label>

              <label htmlFor="cash" className="radio-label">
                <input
                  type="radio"
                  name="paymentMethod"
                  id="cash"
                  value={'cash'}
                  onChange={handleChange}
                />
                cash on delivery
              </label>
            </div>
          </div>

          {customer.paymentMethod === 'eMoney' && (
            <div className="e-money-details">
              <FormInput
                onChange={handleChange}
                type="text"
                label="e-Money Number"
                placeholder="238519663"
                name="eMoneyNumber"
                value={customer.eMoneyNumber}
              />

              <FormInput
                onChange={handleChange}
                type="text"
                label="e-Money Pin"
                placeholder="9663"
                name="eMoneyPin"
                value={customer.eMoneyPin}
              />
            </div>
          )}

          {customer.paymentMethod === 'cash' && (
            <div className="cash-on-delivery">
              <CashIcon />
              <p>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          )}
        </fieldset>
      </form>
    </Form>
  );
}

const Form = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 54px 48px;
  width: 730px;

  h2 {
    margin-bottom: 41px;
    font-size: 2rem;
  }

  h3 {
    color: var(--orange-main);
    text-align: start;
    font-size: 13px;
    line-height: 25px;
    letter-spacing: 0.928571px;
    margin-bottom: 1rem;
    margin: 0;
  }
  h5 {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.214286px;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: none;
  }

  input[type='text'],
  input[type='email'] {
    height: 56px;
    width: 309px;
    border-radius: 8px;
    border: 1px solid #cfcfcf;
    padding: 24px 1rem;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.25px;
    color: #000000;
  }

  input[type='text']:focus,
  input[type='email']:focus {
    border: none;
    outline: 1px solid var(--orange-main);
  }

  input[name='phone'],
  input[name='country'] {
    margin-bottom: 51px;
  }

  input[name='address'] {
    width: 100%;
    margin-bottom: 24px;
  }

  label {
    display: block;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.214286px;
    margin-bottom: 9px;
  }

  .input-container {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 24px;
    width: 100%;
  }

  .radio-label {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 18px 1rem;
    border-radius: 8px;
    border: 1px solid hsla(0, 0%, 0%, 0.2);
    width: 309px;
    cursor: pointer;
  }

  input[type='radio'] {
    height: 20px;
    width: 20px;
  }

  .e-money-details {
    display: flex;
    justify-content: space-between;
  }

  .img-container {
    width: 48px;
    height: 48px;
  }

  .cash-on-delivery {
    display: flex;
    align-items: center;
    gap: 2rem;

    p {
      width: 90%;
    }
  }

  @media (max-width: 90em) {
    width: 100%;
    padding: 30px 28px;
  }

  @media (max-width: 48em) {
    .input-container {
      flex-direction: column;
    }

    .radio-label {
      width: 100%;
    }

    input[type='text'],
    input[type='email'] {
      width: 100%;
    }

    .e-money-details {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

export default CheckoutForm;
