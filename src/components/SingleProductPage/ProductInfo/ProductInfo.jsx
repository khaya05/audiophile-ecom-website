import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {IncrementBtn} from '../../';
import {OrangeBtn} from '../../';

function ProductInfo({
  id,
  price,
  description,
  name,
  image: { mobile, tablet, desktop },
  isNew,
  cartImage,
  slug,
}) {
  const count = useSelector((state) => state.cart.count);

  const cartInfo = {
    id,
    slug,
    price,
    cartImage,
    quantity: count,
  };

  return (
    <Container>
      <picture>
        <source media="(min-width:90em)" srcSet={desktop} />
        <source media="(min-width:48em)" srcSet={tablet} />
        <img src={mobile} alt={name} />
      </picture>

      <div className="info">
        {isNew && <h4>new product</h4>}
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="price">
          ${'  '}
          {price.toLocaleString()}
        </p>
        <div className="btn-container">
          <IncrementBtn />
          <OrangeBtn
            text={'add to cart'}
            action={'add to cart'}
            cartInfo={cartInfo}
          />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 88px;
  margin-inline: auto;

  picture {
    margin-bottom: 2rem;
  }

  img {
    margin-inline: auto;
    width: 327px;
    height: 327px;
    border-radius: 8px;
  }

  h2,
  h4 {
    text-align: start;
  }

  h2,
  p {
    margin-bottom: 24px;
  }

  .price {
    margin-top: 31px;
  }

  h4 {
    margin-bottom: 24px;
  }

  .price {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 1.28571px;
    opacity: 1;
  }

  .btn-container {
    display: flex;
    gap: 1rem;
  }
  .btn-container > .main-btn {
    width: 160px;
  }

  @media (min-width: 48em) {
    height: 480px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 689px;
    margin-bottom: 120px;

    img {
      width: 281px;
      height: 100%;
    }

    .info {
      width: 340px;
    }

    h4 {
      margin-bottom: 17px;
    }

    h2,
    p {
      margin-bottom: 2rem;
    }

    @media (min-width: 90em) {
      max-width: 1110px;
      height: 560px;
      margin-bottom: 160px;

      img {
        width: 540px;
      }

      .info {
        width: 445.5px;
      }

      .price {
        margin-bottom: 47px;
      }
    }
  }
`;

export default ProductInfo;
