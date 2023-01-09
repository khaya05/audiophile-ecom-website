import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as ArrowRight } from '../../assets/shared/desktop/icon-arrow-right.svg';
import { uiActions } from '../../store/uiSlice';

function ShopBtn({ path }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showMenu = useSelector((state) => state.ui.showMenu);

  const handleClick = () => {
    navigate('/' + path);

    if (showMenu) {
      dispatch(uiActions.toggleShowMenu());
      dispatch(uiActions.toggleModal());
    }
  };

  return (
    <Button onClick={handleClick}>
      shop{' '}
      <span>
        <ArrowRight />
      </span>
    </Button>
  );
}

const Button = styled.button`
  border: none;
  background: inherit;
  margin-top: 17px;
  display: flex;
  align-items: center;
  gap: 13.32px;
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
  opacity: 0.5;
  margin-inline: auto;
  :hover {
    cursor: pointer;
    color: var(--orange-main);
  }
`;
export default ShopBtn;
