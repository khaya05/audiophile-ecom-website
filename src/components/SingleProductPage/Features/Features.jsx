import styled from 'styled-components';

function Features({ features, includes }) {
  return (
    <Article>
      <div>
        <h2>Features</h2>
        <p className="first-paragraph">
          {features.slice(0, features.indexOf('\n'))}
        </p>
        <br></br>
        <p className="second-paragraph">
          {features.slice(features.indexOf('\n'))}
        </p>
      </div>

      <div className="container">
        <h2>In The Box</h2>
        <ul aria-label="items-included">
          {includes.map(({ quantity, item }, index) => (
            <li key={index}>
              <span>{quantity}x</span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </Article>
  );
}

const Article = styled.article`
  max-width: 689px;
  margin-inline: auto;
  margin-bottom: 88px;
  p,
  h2 {
    color: black;
    text-align: start;
  }

  h2 {
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.857143px;
    margin-bottom: 24px;
  }

  .second-paragraph {
    margin-bottom: 88px;
  }

  p {
    color: hsla(0, 0%, 0%, 0.7);
  }

  li span {
    margin-right: 10px;
    color: var(--orange-main);
    /* opacity: 1; */
    font-weight: 700;
    font-size: 15px;
  }

  li {
    list-style: none;
    display: flex;
  }

  @media (min-width: 48em) {
    margin-bottom: 120px;
    font-size: 2rem;

    h2 {
      margin-bottom: 2rem;
    }

    .container {
      display: flex;

      h2 {
        width: 339px;
      }
    }

    .second-paragraph {
      margin-bottom: 120px;
    }
  }

  @media (min-width: 90em) {
    font-size: 2rem;
    display: flex;
    justify-content: space-between;
    gap: 125px;
    max-width: 1110px;
    margin-bottom: 160px;

    .container {
      display: flex;
      flex-direction: column;

      h2 {
        width: 339px;
      }
    }

    .second-paragraph {
      margin-bottom: 0;
    }
  }
`;

export default Features;
