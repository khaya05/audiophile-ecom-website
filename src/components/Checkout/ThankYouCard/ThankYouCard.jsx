import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Check } from '../../../assets/checkout/icon-checkmark.svg';
import OrangeBtn from '../../UI/OrangeBtn';
import { uiActions } from '../../../store/uiSlice';

function ThankYouCard() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const grandTotal = useSelector((state) => state.cart.grandTotal);
  const expandCartItems = useSelector((state) => state.ui.expandCartItems);

  const cart = expandCartItems ? cartItems : cartItems.slice(0, 1);

  const hideCartItems = () => {
    dispatch(uiActions.toggleExpandCartItems());
  };

  return (
    <Card>
      <div className="tick-container">
        <Check />
      </div>

      <h3>
        thank you <span>for your order</span>
      </h3>

      <p>You will receive an email confirmation shortly.</p>

      <div className="container">
        <div className="left">
          <ul>
            {cart.map(({ id, cartImage, price, quantity, slug }) => (
              <li key={id}>
                <div className="item-container">
                  <img src={cartImage} alt="" aria-hidden="true" />
                  <div className="price-container">
                    <p className="slug">{slug}</p>
                    <p className="price">$ {price.toLocaleString()}</p>
                  </div>
                </div>

                <p className="quantity">x{quantity}</p>
              </li>
            ))}
          </ul>

          {cartItems.length > 1 && (
            <button className="show-all" onClick={hideCartItems}>
              {expandCartItems
                ? 'View less'
                : `and ${cartItems.length - 1} other item(s)`}
            </button>
          )}
        </div>

        <div className={`right`}>
          <div
            className={`total-container ${expandCartItems && 'justify-end'}`}
          >
            <p className="total">grand total</p>
            <p className="grand-price">$ {grandTotal.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <OrangeBtn text="back home" action="back home" />
    </Card>
  );
}

const Card = styled.div`
  position: absolute;
  width: 87.2%;
  top: 16%;
  right: 6%;
  background: white;
  border-radius: 8px;
  padding: 2rem;
  z-index: 3;

  h3 {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.857143px;
    text-transform: uppercase;
    text-align: start;
    margin: 28px 0 1rem;

    span {
      display: block;
    }
  }

  .container {
    margin-block: 24px;

    .left {
      background: var(--light-gray);
      padding: 24px;
      border-radius: 8px 0 0 8px;
    }

    .right {
      background: black;
      padding: 24px;
      border-radius: 0 8px 8px 0;
    }
  }

  ul {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.08);
  }

  li,
  .item-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }

  .item-container {
    gap: 1rem;
  }

  .slug,
  .price,
  .quantity {
    font-weight: 700;
    font-size: 15px;
  }

  .slug {
    line-height: 25px;
    text-transform: uppercase;
    color: black;
    opacity: 1;
  }

  .show-all {
    background: inherit;
    border: none;
    opacity: 0.75;
    font-weight: 700;
    font-size: 12px;
    display: block;
    margin-inline: auto;
  }

  img {
    width: 50px;
    height: 50px;
  }

  .tick-container {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: var(--orange-main);
    padding: 0.7rem;
  }

  .tick-container path {
    fill: white;
  }

  .total {
    color: white;
    opacity: 0.5;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .grand-price {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
    opacity: 1;
  }

  @media (min-width: 48em) {
    padding: 48px;
    max-width: 540px;
    top: 154px;
    right: calc(50% - 270px);

    h3 {
      font-size: 32px;
      line-height: 36px;
      letter-spacing: 1.14286px;
      margin: 2rem 0 24px;
    }

    .container {
      margin: 2rem 0 46px;
      display: flex;
      justify-content: space-between;
      margin-inline: auto;
    }

    .left {
      width: 55.4%;
    }

    .right {
      width: 44.59%;
      position: relative;
    }

    .justify-end {
      position: absolute;
      bottom: 3.2rem;
    }
  }
`;

export default ThankYouCard;
