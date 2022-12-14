import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import { uiActions } from '../../store/uiSlice';

function OrangeBtn({ text, action, cartInfo }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleClick = () => {
    if (action === 'add to cart') {
      dispatch(cartActions.addItemToCart(cartInfo));
    }

    if (action === 'checkout') {
      dispatch(uiActions.toggleCart());
      dispatch(uiActions.toggleModal());
      navigate('/checkout');
    }

    if (action === 'continue') {
      dispatch(uiActions.toggleModal());
      dispatch(uiActions.toggleThanksCard());
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    if (action === 'back home') {
      dispatch(uiActions.toggleModal());
      dispatch(uiActions.toggleThanksCard());
      dispatch(cartActions.removeAll());
      navigate('/');
    }
  };

  return (
    <Button onClick={handleClick} className="main-btn">
      {text}
    </Button>
  );
}

const Button = styled.button`
  background: var(--orange-main);
  border: none;
  color: white;
  height: 48px;
  width: 100%;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;

  :hover {
    cursor: pointer;
    background: var(--orange-main-hover);
  }
`;

export default OrangeBtn;
