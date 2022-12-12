import styled from 'styled-components';
import SeeProduct from '../UI/SeeProduct';

function ProductCard(props) {
  return (
    <Card style={props.index % 2 === 1 ? { flexDirection: 'row-reverse' } : {}}>
      <picture>
        <source media="(min-width:90em)" srcSet={props.product.image.desktop} />
        <source
          media="(min-width:48em)"
          srcSet={props.product.categoryImage.tablet}
        />
        <img src={props.product.image.mobile} alt={props.product.name} />
      </picture>

      <div className="right">
        {props.product.new && <h4>new product</h4>}
        <h2>{props.product.name}</h2>
        <p>{props.product.description}</p>
        <SeeProduct class="orange" id={props.product.id} />
      </div>
    </Card>
  );
}

const Card = styled.div`
  picture {
    height: 352px;
    margin-bottom: 2rem;
  }

  img {
    margin-inline: auto;
    height: 100%;
    width: 327px;
    object-fit: cover;
    border-radius: 8px;
  }

  h2,
  p {
    color: black;
  }

  h2 {
    width: 50%;
    margin: 24px 0;
    font-size: 28px;
    line-height: 38px;
    letter-spacing: 1px;
  }

  p {
    opacity: 0.5;
    text-align: center;
    margin-bottom: 34px;
  }

  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 48em) {
    picture {
      margin-bottom: 52px;
    }

    img {
      width: 689px;
    }

    p {
      width: 83%;
    }

    h2 {
      margin: 1rem 0 2rem;
      font-size: 40px;
      line-height: 44px;
      text-align: center;
      letter-spacing: 1.42857px;
      text-transform: uppercase;
    }
  }

  @media (min-width: 90em) {
    max-width: 1110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 125px;

    picture {
      width: 540px;
      height: 560px;
    }

    .right {
      width: 445px;
      height: 343px;
      justify-content: start;
      align-items: start;
    }

    p,
    h4,
    h2 {
      text-align: start;
    }

    h2,
    p {
      width: 100%;
    }
  }
`;

export default ProductCard;
