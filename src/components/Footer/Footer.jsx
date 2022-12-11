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

          <ul className="nav-links">
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

        <ul className="socials">
          <li>
            <Facebook />
          </li>

          <li>
            <Twitter />
          </li>

          <li>
            <Instagram />
          </li>
        </ul>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  padding-bottom: 32px;
  .container {
    margin-inline: 24px;
    /* border: 1px solid white; */
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
  }

  .nav-links :not(:last-child) {
    margin-bottom: 1rem;
  }

  .socials {
    gap: 1rem;
    flex-direction: row;
    justify-content: center;
    margin: 48px 0 38px;
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

  .active-link{
    color: var(--orange-main)
  }
`;
export default Footer;
