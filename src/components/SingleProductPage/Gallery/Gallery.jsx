import styled from 'styled-components';

function Gallery({ gallery }) {
  const { first, second, third } = gallery;
  return (
    <Div>
      <div className="container" aria-label="more images">
        <div>
          <picture>
            <source media="(min-width:90em)" srcSet={first.desktop} />
            <source media="(min-width:48em)" srcSet={first.tablet} />
            <img src={first.mobile} alt="first" />
          </picture>

          <picture>
            <source media="(min-width:90em)" srcSet={second.desktop} />
            <source media="(min-width:48em)" srcSet={second.tablet} />
            <img src={second.mobile} alt="second" />
          </picture>
        </div>

        <picture>
          <source media="(min-width:90em)" srcSet={third.desktop} />
          <source media="(min-width:48em)" srcSet={third.tablet} />
          <img src={third.mobile} alt="third" />
        </picture>
      </div>
    </Div>
  );
}

const Div = styled.div`
  margin-bottom: 120px;

  img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .container,
  .container > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }

  .container {
    div {
      picture {
        height: 174px;
      }
    }

    picture {
      height: 368px;
    }
  }

  @media (min-width: 48em) {
    max-width: 689px;
    margin-inline: auto;
    .container {
      flex-direction: row;
    }
  }

  @media (min-width: 90em) {
    max-width: 1110px;
    margin-bottom: 160px;

    .container {
      height: 592px;
      width: 100%;
    }

    .container,
    .container > div {
      gap: 18px;
    }

    .container {
      div {
        height: 100%;

        picture {
          height: 280px;
        }
      }

      picture {
        height: 100%;
      }
    }
  }
`;

export default Gallery;
