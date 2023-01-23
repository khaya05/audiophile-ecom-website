import styled from 'styled-components';
import { desktopBestGear, mobileBestGear, tabBestGear } from '../../../assets';

function Audiophile() {
  return (
    <Article>
      <picture>
        <source media="(min-width:90em)" srcSet={desktopBestGear} />
        <source media="(min-width:48em)" srcSet={tabBestGear} />
        <img src={mobileBestGear} alt="best gear" />
      </picture>

      <div className="container">
        <h2>
          Bringing you the <span>best</span> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </Article>
  );
}

const Article = styled.article`
  width: 87.2%;
  margin-inline: auto;
  margin-bottom: 120px;

  img {
    border-radius: 8px;
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  p,
  h2 {
    color: black;
  }

  h2 {
    margin: 40px 0 2rem;
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.42857px;
  }

  p {
    text-align: center;
    opacity: 0.7;
  }

  @media (min-width: 48em) {
    margin-bottom: 96px;

    img {
      height: 100%;
    }

    p,
    h2 {
      width: 83%;
      margin-inline: auto;
    }
  }

  @media (min-width: 90em) {
    margin-bottom: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    gap: 125px;
    height: 558px;
    max-width: 1110px;

    p,
    h2 {
      width: 100%;
      margin-inline: 0;
      text-align: start;
    }

    .container {
      width: 445px;
    }
  }
`;

export default Audiophile;
