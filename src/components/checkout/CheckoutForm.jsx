import { useState } from 'react';
import styled from 'styled-components';
import FormInput from './FormInput';

function CheckoutForm() {
  const [user, setUser] = useState({
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

  const onChangeHandler = () => {};

  return (
    <Form>
      <h2>checkout</h2>
      <form>
        <h3>billing info</h3>
        <fieldset>
          <div className="input-container">
            <FormInput
              label="name"
              name="name"
              type="text"
              required={true}
              placeholder="Alex Ward"
            />

            <FormInput
              label="email address"
              name="email"
              type="email"
              required={true}
              placeholder="alexie@email.com"
            />
          </div>

          <FormInput
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
            label="address"
            name="address"
            type="text"
            required={true}
            placeholder="1137 Williams Avenue"
          />

          <div className="input-container">
            <FormInput
              label="zip code"
              name="zipCode"
              type="text"
              required={true}
              placeholder=" 10002"
            />

            <FormInput
              label="city"
              name="city"
              type="text"
              required={true}
              placeholder="New York"
            />
          </div>

          <FormInput
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
            <h4>payment method</h4>
            <div>
              <FormInput
                label="e-Money"
                name=""
                type="radio"
                required={true}
                placeholder="United States"
              />
              <FormInput type="radio" label="Cash on Delivery" />
            </div>
          </div>
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

  fieldset {
    margin: 0;
    padding: 0;
    border: none;
  }

  input {
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

  input:focus {
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
    gap: 1rem;
    margin-bottom: 24px;
    width: 100%;
  }

  @media (max-width: 90em) {
    width: 100%;
    padding: 30px 28px;
  }

  @media (max-width: 48em) {
    .input-container {
      flex-direction: column;
    }

    input {
      width: 100%;
    }
  }
`;

export default CheckoutForm;
