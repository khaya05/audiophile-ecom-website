import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { pages } from '../../data';

function Navbar() {
  return (
    <Nav>
      <div className="container">
        <div className="nav-left">
          <div className="menu-btn-container" role="button">
            <FaBars />
          </div>

          <Link to="/" className="logo">
            audiophile
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

        <div className="cart-container" role="button">
          <AiOutlineShoppingCart />
        </div>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  color: white;

  svg {
    width: 100%;
    height: 100%;
  }

  .cart-container {
    width: 23px;
    height: 20px;
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
    width: calc(50% + 64px);
  }

  .logo {
    color: white;
    opacity: 1;
    font-size: 25px;
    font-weight: 700;
    text-decoration: none;
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
      width: 128px;
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
