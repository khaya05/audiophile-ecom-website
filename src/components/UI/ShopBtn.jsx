import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as ArrowRight } from '../../assets/shared/desktop/icon-arrow-right.svg';

function ShopBtn({ path }) {
  return (
    <Button>
      <Link to={'/' + path} className="shop-btn">
        shop{' '}
        <span>
          <ArrowRight />
        </span>
      </Link>
    </Button>
  );
}

const Button = styled.button`
  border: none;
  background: inherit;
  margin-top: 17px;

  a {
    display: flex;
    align-items: center;
    gap: 13.32px;
    border: none;
    text-decoration: none;
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #000000;
    opacity: 0.5;
  }

  a:hover {
    color: var(--orange-main);
  }
`;
export default ShopBtn;
