import styled from 'styled-components';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { pages } from '../../data';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/uiSlice';

import { ReactComponent as Logo } from '../../assets/shared/desktop/logo.svg';

function Navbar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.cartItems).length;
  const showMenu = useSelector((state) => state.ui.showMenu);

  const handleShowCart = () => {
    if (location.pathname !== '/checkout') {
      dispatch(uiActions.toggleCart());
      dispatch(uiActions.toggleModal());
    }
  };

  const handleShowMenu = () => {
    dispatch(uiActions.toggleModal());
    dispatch(uiActions.toggleShowMenu());
  };

  return (
    <Nav>
      <div className="container">
        <div className="nav-left">
          <div
            className="menu-btn-container"
            role="button"
            onClick={handleShowMenu}
            style={{ zIndex: showMenu ? 3 : 1 }}
          >
            <FaBars />
          </div>

          <Link to="/">
            <Logo />
          </Link>
        </div>

        <ul>
          {pages.map(({ page, id }) => (
            <li key={id}>
              <NavLink
                to={page === 'home' ? '/' : page}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                {page}
              </NavLink>
            </li>
          ))}
        </ul>

        <div
          className="cart-container"
          role="button"
          onClick={handleShowCart}
          style={{ zIndex: showMenu ? 1 : 3 }}
        >
          {cartItems > 0 && <div className="counter">{cartItems}</div>}
          <AiOutlineShoppingCart />
        </div>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  color: white;
  position: relative;
  width: 100%;

  svg {
    width: 100%;
    height: 100%;
  }

  .cart-container {
    width: 23px;
    height: 20px;
    position: relative;
    z-index: 3;

    div {
      position: absolute;
      top: -0.8rem;
      right: -0.8rem;
      background: var(--orange-main);
      font-size: 13px;
      font-weight: 700;
      width: 1.3rem;
      height: 1.3rem;
      border-radius: 50%;
      display: grid;
      place-items: center;
    }
  }

  .container,
  .nav-left {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .container {
    height: 100%;
    width: 100%;
    padding: 32px 24px;
    border-bottom: 1px solid var(--01-white);
  }

  .nav-left {
    width: calc(50% + 71.5px);
  }

  ul {
    display: none;
  }

  div[role='button']:hover {
    cursor: pointer;
  }

  @media (min-width: 48em) {
    padding-inline: 39px;

    .nav-left {
      justify-content: start;
      gap: 48px;
    }

    .container {
      padding-inline: 0;
    }
  }

  @media (min-width: 90em) {
    padding-inline: 0;

    .nav-left {
      width: 143px;
    }

    .menu-btn-container {
      display: none;
    }

    ul,
    li,
    a {
      height: 100%;
      letter-spacing: 2px;
    }

    ul {
      display: flex;
      gap: 34px;
      li {
        list-style: none;
        a {
          text-decoration: none;
          text-transform: uppercase;
          color: white;
          font-weight: 700;
          font-size: 13px;
          line-height: 25px;
        }
      }
    }

    a:hover {
      color: var(--orange-main-hover);
    }

    .active-link {
      color: var(--orange-main);
    }

    .container {
      max-width: 1110px;
      margin: 0 auto;
      padding-inline: 0;
    }
  }
`;

export default Navbar;
