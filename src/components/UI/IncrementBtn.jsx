import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { cartActions } from '../../store/cartSlice';


function IncrementBtn() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cart.count);

  const increaseCount = () => {
    dispatch(cartActions.increaseQuantity());
  };

  const decreaseCount = () => {
    dispatch(cartActions.decreaseQuantity())
  }

  return (
    <Div className="btn-container">
      <button onClick={decreaseCount}>-</button>
      <div>{count}</div>
      <button onClick={increaseCount }>+</button>
    </Div>
  );
}

const Div = styled.div`
  width: 120px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--light-gray);
  padding: 15px;

  button {
    background: none;
    border: none;
    color: black;
    opacity: 0.4;
    width: 100%;
    font-size: 1.5rem;
    display: grid;
    place-items: center;
  }

  button:hover {
    cursor: pointer;
    color: var(--orange-main);
  }

  div,
  button {
    font-weight: 700;
  }

  div {
    font-size: 13px;
    text-align: center;
    color: black;
    opacity: 1;
  }
`;

export default IncrementBtn;
