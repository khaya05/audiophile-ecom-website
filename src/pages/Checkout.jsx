import styled from 'styled-components';
import { Cart, CheckoutForm, GoBack } from '../components';

function Checkout() {
  return (
    <Main>
      <div className="page-container">
        <GoBack />
        <div className="container">
          <CheckoutForm />
          <div className="cart-container">
            <Cart />
          </div>
        </div>
      </div>
    </Main>
  );
}

const Main = styled.main`
  background-color: var(--light-gray);

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
    gap: 30px;
  }

  .cart-container {
    width: 350px;
  }
`;

export default Checkout;
