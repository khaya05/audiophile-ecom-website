import styled from 'styled-components';
import { Cart, CheckoutForm, GoBack } from '../components';

function Checkout() {
  return (
    <Main>
      <div className="page-container">
        <GoBack />
        <div className="container">
          <CheckoutForm />
          <div className="checkout-cart-container">
            <Cart />
          </div>
        </div>
      </div>
    </Main>
  );
}

const Main = styled.main`
  background-color: var(--light-gray);
  padding-bottom: 142px;

  .page-container {
    max-width: 1110px;
    margin-inline: auto;
  }
  h2 {
    text-align: start;
  }

  .container {
    width: 100%;
    display: flex;
    gap: 32px;
  }

  .checkout-cart-container {
    width: 350px;
  }

  @media (max-width: 90em) {
    padding-bottom: 116px;

    .page-container {
      max-width: 680px;
    }

    .container {
      flex-direction: column;
    }

    .checkout-cart-container {
      width: 100%;
      margin-right: 0;
    }
  }

  @media (max-width: 48em) {
    padding-bottom: 97px;
    padding-inline: 6.3999%;
  }
`;

export default Checkout;
