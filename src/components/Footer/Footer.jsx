import styled from 'styled-components';
import { Logo } from '../../assets';
import { pages } from '../../data';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Facebook } from '../../assets/shared/desktop/icon-facebook.svg';
import { ReactComponent as Twitter } from '../../assets/shared/desktop/icon-twitter.svg';
import { ReactComponent as Instagram } from '../../assets/shared/desktop/icon-instagram.svg';

function Footer() {
  return (
    <Container>
      <div className="container">
        <div className="bar"></div>
        <div className="logo-nav-container">
          <img src={Logo} alt="logo" />

          <ul className="nav-links" data-testid="navigation links">
            {pages.map(({ id, page }) => (
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
        </div>
        <div className="about-container">
          <p className="about">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className="copyright">Copyright 2021. All Rights Reserved</p>
        </div>
        <ul className="socials" data-testid="social media links">
          <li>
            <button>.
              <Facebook />
            </button>
          </li>

          <li>
            <button>.
              <Twitter />
            </button>
          </li>

          <li>
            <button>.
              <Instagram />
            </button>
          </li>
        </ul>
        z
      </div>
    </Container>
  );
}

const Container = styled.footer`
  padding-bottom: 32px;
  .container {
    margin-inline: 24px;
  }

  .bar {
    width: 101px;
    height: 4px;
    background: var(--orange-main);
    margin-inline: auto;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 13px;
    line-height: 25px;
    letter-spacing: 2px;
  }

  .nav-links {
    margin-block: 48px;
    gap: 1rem;

    li a:hover {
      color: var(--orange-main-hover);
    }
  }

  .socials {
    gap: 1rem;
    flex-direction: row;
    justify-content: center;
    margin: 48px 0 38px;

    li {
      button {
        border: none;
        background: inherit;
        cursor: pointer;
        span {
          display: none;
        }
      }

      button:hover path {
        fill: var(--orange-main);
      }
    }
  }

  li {
    list-style: none;
  }

  a,
  p {
    text-align: center;
    font-size: 15px;
  }

  p {
    opacity: 0.5;
  }

  .copyright {
    margin-top: 48px;
  }

  img {
    margin-top: 48px;
    margin-inline: auto;
  }

  .active-link {
    color: var(--orange-main);
  }

  @media (min-width: 48em) {
    padding-bottom: 48px;
    .container {
      margin-inline: 39px;
      position: relative;
    }

    img {
      margin: 56px 0 0;
    }

    p {
      text-align: start;
    }

    .nav-links {
      flex-direction: row;
      justify-content: start;
      margin-block: 2rem;
      gap: 2rem;
    }

    .bar {
      margin-inline: 0;
    }

    .socials {
      position: absolute;
      bottom: -2.2rem;
      right: 2px;
    }

    .copyright {
      margin-top: 80px;
    }
  }

  @media (min-width: 90em) {
    .container {
      max-width: 1110px;
      margin-inline: auto;
    }
    .logo-nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 71px 0 36px;
    }

    .nav-links {
      margin: 0;
    }

    img {
      margin: 0;
    }

    p {
      max-width: 540px;
    }

    .about {
      height: 100px;
    }

    .copyright {
      margin-top: 56px;
    }

    .socials {
      bottom: 3rem;
    }
  }
`;
export default Footer;
