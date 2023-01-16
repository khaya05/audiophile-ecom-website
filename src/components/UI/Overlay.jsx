import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/uiSlice';

function Overlay() {
  const dispatch = useDispatch();

  const closeAll = () => {
    dispatch(uiActions.closeCart());
    dispatch(uiActions.closeMenu());
    dispatch(uiActions.closeModal());
    dispatch(uiActions.closeThanksCard());
  };

  return <Div onClick={closeAll}></Div>;
}

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: hsla(0, 0%, 0%, 0.5);
  z-index: 2;
`;

export default Overlay;
