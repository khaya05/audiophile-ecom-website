import styled from 'styled-components';
import OrangeBtn from '../UI/OrangeBtn';
// import { FiCheck } from 'react-icons/fi';
// import {BsFillCheckCircleFill} from 'react-icons/bs'
import { useSelector } from 'react-redux';

function ThankYouCard() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const grandTotal = useSelector((state) => state.cart.grandTotal);

  return (
    <Card>
      <div className="tick-container">{/* <BsFillCheckCircleFill /> */}</div>

      <h3>
        thank you <span>for your order</span>
      </h3>

      <p>You will receive an email confirmation shortly.</p>

      <div className="container">
        <div className="left">
          <ul>
            {cartItems.map(({ id, cartImage, price, quantity, slug }) => (
              <li key={id}>
                <div>
                  <img src={cartImage} alt="" aria-hidden="true" />
                  <div className="price-container">
                    <p className="slug">{slug}</p>
                    <p className="price">$ {price}</p>
                  </div>
                </div>

                <div className="quantity">x{quantity}</div>
              </li>
            ))}
          </ul>

          <p className="show-all">and {cartItems.length - 1} other item(s)</p>
        </div>

        <div className="right">
          <p className="total">grand total</p>
          <p className="price">$ {grandTotal}</p>
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
    padding: 28px 0 1rem;

    span {
      display: block;
    }
  }

  .container {
    margin-block: 24px;
  }

  .tick-container {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: var(--orange-main);
  }
`;

export default ThankYouCard;
