import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Categories, GoBack } from '..';
import Features from './Features';
import Gallery from './Gallery';
import Others from './Others';
import ProductInfo from './ProductInfo';

function SingleProductPage(props) {
  const navigate = useNavigate();

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
        <GoBack />

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

  @media (min-width: 90em) {
    max-width: 1110px;
  }
`;

export default SingleProductPage;
