import styled from 'styled-components';
import { Categories } from '..';
import Features from './Features';
import Gallery from './Gallery';
import Others from './Others';
import ProductInfo from './ProductInfo';

function SingleProductPage(props) {
  const {
    name,
    image,
    price,
    description,
    features,
    includes,
    others,
    gallery,
    new: isNew,
  } = props.product[0];

  return (
    <>
      <Main>
      <p className='go-back'>Go Back</p>
        <ProductInfo
          price={price}
          description={description}
          name={name}
          image={image}
          isNew={isNew}
        />
        <Features features={features} includes={includes} />
        <Gallery gallery={gallery} />
        <Others others={others} />
      </Main>
      <Categories />
    </>
  );
}

const Main = styled.main`
  width: 87.2%;
  margin-inline: auto;

  .go-back {
    margin: 1rem 0 24px;
  }

  .go-back:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media (min-width: 48em) {
    .go-back {
      margin: 2rem 0 24px;
    }
  }

  @media (min-width: 90em) {
    max-width: 1110px;
    .go-back {
      margin: 79px 0 56px;
    }
  }
`;

export default SingleProductPage;
