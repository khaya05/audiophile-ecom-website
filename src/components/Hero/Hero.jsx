import styled from 'styled-components';
import { HeroDesktopBgImg, HeroMobileBgImg, HeroTabBgImg } from '../../assets';
import { SeeProduct } from '../';

function Hero() {
  return (
    <Wrapper>
      <div className="container">
        <div className="info">
          <h4>new product</h4>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <div className="btn-container">
            <SeeProduct class="orange" id={4} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background-size: 100%;
  background-position: 0 -6rem;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;

  h1 {
    margin-top: 1rem;
    margin-bottom: 24px;
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  .container {
    background-image: url(${HeroMobileBgImg});
    background-repeat: no-repeat;
    /* max-width: 375px; */
    margin-inline: auto;
    width: 100%;
    height: 100%;
    padding: 102px 24px 112px;
  }

  .container::after {
    content: '';
    display: block;
    /* border:1px solid white; */
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.5;
    z-index: -1;
  }

  p {
    width: 80%;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 28px;
  }

  @media (min-width: 48em) {
    background-size: cover;
    background-position: 0 -10rem;
    height: 639px;

    .container {
      /* border: 1px solid red; */
      background-image: url(${HeroTabBgImg});
      background-size: 100%;
      background-position: 0 0;
      width: 100%;
    }
  }

  @media (min-width: 90em) {
    padding-inline: 0;
    background-image: none;
    height: 632px;

    .container {
      background-image: url(${HeroDesktopBgImg});
      margin-inline: 0;
      background-size: 115%;
      max-width: 1110px;
      margin-inline: auto;
      /* background-position: -7rem -9rem; */
    }

    .info {
      align-items: start;
      max-width: 375px;
    }

    h1,
    h4,
    p {
      text-align: start;
    }

    p {
      margin-inline: 0;
    }

    .hero-right {
      width: 50%;
      border: 1px solid red;
    }
  }
`;

export default Hero;
