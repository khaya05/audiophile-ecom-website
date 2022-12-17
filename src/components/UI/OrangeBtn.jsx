import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux'
import { cartActions } from '../../store/cartSlice';

function OrangeBtn({ text, action,cartInfo }) {
  const dispatch = useDispatch()
  const cartItems = useSelector(state=>state.cart.cartItems)
  const handleClick = () => {
    
    if (action === 'add to cart') {
      dispatch(cartActions.addItemToCart(cartInfo));
    }
  };

console.log(cartItems);
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
