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
    width: 87%;
    max-width: 530px;
    margin-inline: auto;
    flex-direction: column;
    position: relative;
    z-index: 2;
  }

  .container {
    background-image: url(${HeroMobileBgImg});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 50% 0;
    margin-inline: auto;
    width: 100%;
    height: 100%;
    padding: 102px 24px 112px;
  }
  
  @media (min-width:430px) {
    .container {
      background-image: url(${HeroTabBgImg});
      background-size: 110%;
    }
  }

  @media (min-width:520px) {
    .container {
      background-size: 80%;
      background-position: 50% 20%;
    }
  }
  .container::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.7;
    z-index: 1;
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
      background-image: url(${HeroTabBgImg});
      background-size: contain;
      background-position: 50% 0;
      width: 100%;
    }

    .info {
      width: 49%;
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
    }

    .info {
      margin-inline: 0;
      margin-top: 4rem;
      align-items: start;
      max-width: 398px;
    }

    h1,
    h4,
    p {
      text-align: start;
    }

    p {
      margin-inline: 0;
      width: 100%;
    }

    .hero-right {
      width: 50%;
      border: 1px solid red;
    }
  }
`;

export default Hero;
