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
                <p>{price}</p>
              </div>
            </div>

            {/* <IncrementBtn /> */}

            <p className="quantity">x{quantity}</p>
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

      <div className="tot-container">
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

  img {
    width: 64px;
    border-radius: 8px;
  }

  li {
    height: 64px;
    display: flex;
    justify-content: space-between;
  }

  .div{
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
`;

export default Cart;
