import styled from 'styled-components';
import { HeroBgImg } from '../../../assets';
import { SeeProduct } from '../../';

function Hero() {
  return (
    <Wrapper>
      <div className="container">
        <div className="info">
          <h4>new product</h4>
          <h1>XX99 Mark II HeadphoneS</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <div className="btn-container">
            <SeeProduct class="orange" path="/products/product/123" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  padding: 102px 24px 112px;

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
    max-width: 328px;
    margin-inline: auto;
    background-image: url(${HeroBgImg}) no-repeat;
  }

  p {
    width: 80%;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 28px;
  }

  @media (min-width: 48em) {
    .container {
      max-width: 379px;
    }
  }

  @media (min-width: 90em) {
    .container {
      display: flex;
      /* max-width: 1110px; */
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
