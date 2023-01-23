import styled from 'styled-components';
import Categories from './Categories';
import ProductCard from '../ProductCard/ProductCard';

function CategoriesPage({ heading, products }) {
  return (
    <>
      <Container>
        <div className="container">
          <header>
            <h2>{heading}</h2>
          </header>

          <div className="products">
            {products.map((product, index) => {
              return (
                <article key={product.id}>
                  <ProductCard product={product} index={index} />
                </article>
              );
            })}
          </div>
        </div>
      </Container>
      <Categories />
    </>
  );
}

const Container = styled.div`
  header {
    height: 120px;
    display: grid;
    place-items: center;
    margin-bottom: 64px;
  }
  .products {
    width: 87.2%;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 120px;
  }

  @media (min-width: 48em) {
    header {
      height: 246px;
      margin-bottom: 120px;
    }
  }

  @media (min-width: 90em) {
    header {
      height: 239px;
      margin-bottom: 160px;
    }

    .products {
      gap: 160px;
    }
  }
`;

export default CategoriesPage;
