import styled from 'styled-components';

function Gallery({ gallery }) {
  const { first, second, third } = gallery;
  return (
    <Div>
      <div className="container" aria-label="more images">
        <picture>
          <source media="(min-width:90em)" srcSet={first.desktop} />
          <source media="(min-width:48em)" srcSet={first.tablet} />
          <img src={first.mobile} alt="image one" />
        </picture>

        <picture>
          <source media="(min-width:90em)" srcSet={second.desktop} />
          <source media="(min-width:48em)" srcSet={second.tablet} />
          <img src={second.mobile} alt="image two" />
        </picture>

        <picture>
          <source media="(min-width:90em)" srcSet={third.desktop} />
          <source media="(min-width:48em)" srcSet={third.tablet} />
          <img src={third.mobile} alt="image three" />
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

  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 174px 174px 368px;
    gap: 20px;
  }

  @media (min-width: 48em) {
    .container {
      border: 1px solid red;
      width: 690;
      gap: 18px;
      /* height: 368px; */
      grid-template-columns: 277px 395px;
      grid-template-rows: 277px 277px;
    }

    .container:nth-child(3) {
      grid-column-start: 2;
      /* margin-right: 1rem; */
      /* width: 50%; */
      visibility: hidden;
    }
  }

  @media (min-width: 90em) {
    margin-bottom: 160px;
  }
`;

export default Gallery;
