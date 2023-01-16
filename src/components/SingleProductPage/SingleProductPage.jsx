import styled from 'styled-components';
import { Categories, GoBack } from '../';
import Features from './Features/Features';
import Gallery from './Gallery/Gallery';
import Others from './Others/Others';
import ProductInfo from './ProductInfo/ProductInfo';

function SingleProductPage(props) {
  const {
    id,
    name,
    image,
    price,
    description,
    features,
    includes,
    others,
    gallery,
    new: isNew,
    cartImage,
    slug,
  } = props.product[0];

  return (
    <>
      <Main>
        <GoBack />

        <ProductInfo
          id={id}
          price={price}
          description={description}
          name={name}
          image={image}
          isNew={isNew}
          cartImage={cartImage}
          slug={slug}
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

  @media (min-width: 90em) {
    max-width: 1110px;
  }
`;

export default SingleProductPage;
