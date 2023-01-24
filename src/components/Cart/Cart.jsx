import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { cartActions } from '../../store/cartSlice';
import { uiActions } from '../../store/uiSlice';
import OrangeBtn from '../UI/OrangeBtn';

function Cart() {
  const dispatch = useDispatch();
  const location = useLocation();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.total);
  const grandTotal = useSelector((state) => state.cart.grandTotal);
  const vat = useSelector((state) => state.cart.vat);
  const shipping = useSelector((state) => state.cart.shipping);

  const checkout = '/checkout';

  const decreaseQuantity = (id) => {
    dispatch(cartActions.decreaseQuantityInCart(id));
  };

  const increaseQuantity = (id) => {
    dispatch(cartActions.increaseQuantityInCart(id));
  };

  const clearCart = () => {
    dispatch(cartActions.removeAll());
    dispatch(uiActions.toggleCart());
    dispatch(uiActions.toggleModal());
  };

  if (cartItems.length === 0) {
    return (
      <Div>
        <h3>cart (0)</h3>
        <br />
        <hr />
        <br />
        <p className="empty-cart">your cart is currently empty</p>
      </Div>
    );
  }

  return (
    <Div>
      <div className="header__container">
        <h3>
          {location.pathname === checkout
            ? 'summary'
            : `cart (${cartItems.length})`}
        </h3>
        {location.pathname !== checkout && (
          <button onClick={clearCart}>remove all</button>
        )}
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

            {location.pathname !== checkout && (
              <div className="btn-container">
                <div
                  className="toggle-quantity"
                  onClick={() => decreaseQuantity(id)}
                >
                  -
                </div>
                <div className="quantity">{quantity}</div>
                <div
                  className="toggle-quantity"
                  onClick={() => increaseQuantity(id)}
                >
                  +
                </div>
              </div>
            )}

            {location.pathname === checkout && (
              <p className="quantity">x{quantity}</p>
            )}
          </li>
        ))}
      </ul>

      <div className="tot-container">
        <p>total</p>
        <div className="number">$ {total.toLocaleString()}</div>
      </div>

      {location.pathname === checkout && (
        <>
          <div className="tot-container">
            <p>shipping</p>
            <div className="number">$ {shipping}</div>
          </div>

          <div className="tot-container">
            <p>vat (included)</p>
            <div className="number">$ {vat.toLocaleString()}</div>
          </div>

          <div className="tot-container grand-total">
            <p>grand total</p>
            <div className="number">$ {grandTotal.toLocaleString()}</div>
          </div>
        </>
      )}

      <OrangeBtn
        text={location.pathname === checkout ? 'continue' : 'checkout'}
        action={location.pathname === checkout ? 'continue' : 'checkout'}
      />
    </Div>
  );
}

const Div = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;

  .empty-cart {
    font-weight: 700;
    text-transform: capitalize;
    text-align: center;
  }

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

  .btn-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: var(--light-gray);

    div {
      font-weight: 700;
    }

    .toggle-quantity {
      color: hsla(0, 0%, 0%, 0.5);
      font-size: 2rem;

      :hover {
        cursor: pointer;
        color: var(--orange-main);
      }
    }

    .quantity,
    .toggle-quantity {
      display: grid;
      place-items: center;
      width: 1rem;
      height: 18px;
      font-size: 13px;
    }
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
