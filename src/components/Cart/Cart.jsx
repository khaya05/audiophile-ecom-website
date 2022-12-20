import { useSelector } from 'react-redux';
import styled from 'styled-components';
import IncrementBtn from '../UI/IncrementBtn';
import OrangeBtn from '../UI/OrangeBtn';

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const currentPath = window.location.href;

  const total = 1;
  const shipping = 1;
  const vat = 1;
  const grandTotal = 1;

  return (
    <Div>
      <div className="header__container">
        <h3>cart ({cartItems.length})</h3>
        <button>remove all</button>
      </div>

      <ul>
        {cartItems.map(({ id, slug, price, quantity, cartImage }) => (
          <li key={id}>
            <div className="div">
              <img src={cartImage} alt={slug} />

              <div className="price-container">
                <h5>{slug}</h5>
                <p>$ {price.toLocaleString()}</p>
              </div>
            </div>

            <div className="btn-container">
              <IncrementBtn />
            </div>

            {/* <p className="quantity">x{quantity}</p> */}
          </li>
        ))}
      </ul>

      <div className="tot-container">
        <p>total</p>
        <div className="number">$ {total}</div>
      </div>

      <div className="tot-container">
        <p>shipping</p>
        <div className="number">$ {shipping}</div>
      </div>

      <div className="tot-container">
        <p>vat (included)</p>
        <div className="number">$ {vat}</div>
      </div>

      <div className="tot-container grand-total">
        <p>grand total</p>
        <div className="number">$ {grandTotal}</div>
      </div>

      <OrangeBtn text={'checkout'} action={'checkout'} />
    </Div>
  );
}

const Div = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;

  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    h3 {
      font-size: 18px;
      text-align: start;
    }

    button {
      background: inherit;
      text-transform: capitalize;
      color: hsla(0, 0%, 0%, 0.5);
      border: none;
      font-size: 15px;
    }

    button:hover {
      text-decoration: underline;
      color: var(--orange-main);
    }
  }

  .btn-container {
    width: 96px;
    height: 2rem;
  }

  img {
    width: 64px;
    border-radius: 8px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 2rem;
  }

  li {
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h5,
    p {
      font-weight: 700;
      font-size: 15px;
    }

    h5 {
      text-transform: uppercase;
    }

    p {
    }
  }

  .div {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  .tot-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;

    p {
      text-transform: uppercase;
      font-size: 15px;
    }

    div {
      font-weight: 700;
      font-size: 18px;
      line-height: 25px;
      text-align: right;
      text-transform: uppercase;
      color: #000000;
    }
  }

  .grand-total {
    margin-bottom: 0;
    margin: 24px 0 2rem;

    div {
      color: var(--orange-main);
    }
  }
`;

export default Cart;
