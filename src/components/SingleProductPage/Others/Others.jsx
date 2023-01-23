import styled from 'styled-components';
import { data } from '../../../data';
import SeeProduct from '../../UI/SeeProduct';

function Others({ others }) {
  return (
    <Div>
      <h2>You may also like</h2>

      <ul className="container" aria-label="you may also like">
        {others.map(({ image, name, slug }, index) => {
          const currentItem = data.find((item) => item.slug === slug);

          return (
            <li key={index}>
              <picture>
                <source media="(min-width:90em)" srcSet={image.mobile} />
                <source media="(min-width:48em)" srcSet={image.tablet} />
                <img src={currentItem.categoryImage.tablet} alt="product" />
              </picture>

              <h2>{name}</h2>
              <SeeProduct class={'orange'} id={currentItem.id} />
            </li>
          );
        })}
      </ul>
    </Div>
  );
}
const Div = styled.div`
  margin: 0 auto;

  ul,
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  ul {
    gap: 56px;
    margin-top: 40px;
  }

  img {
    width: 100%;
    height: 120px;
    border-radius: 8px;
    object-fit: cover;
  }

  picture {
    width: 100%;
  }

  li {
    gap: 2rem;
    width: 100%;

    h2 {
      font-size: 24px;
    }
  }

  @media (min-width: 48em) {
    ul {
      gap: 10px;
      margin-top: 56px;
      flex-direction: row;
    }

    picture {
      height: 318px;
      margin-bottom: 0;
    }

    img {
      height: 100%;
    }

    li {
      gap: 0;

      h2 {
        margin-top: 40px;
        margin-bottom: 2rem;
      }
    }

    @media (min-width: 90em) {
      ul {
        gap: 30px;
      }

      h2 {
        margin-top: 64px;
      }
    }
  }
`;
export default Others;
