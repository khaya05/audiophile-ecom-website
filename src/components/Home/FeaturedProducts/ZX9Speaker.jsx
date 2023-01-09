import styled from 'styled-components';
import speakerImg from '../../../assets/home/desktop/image-speaker-zx9.png';
import { SeeProduct } from '../../';


function ZX9Speaker() {
  return (
    <Wrapper>
      <div className="container">
        <div className="top">
          <img src={speakerImg} alt=" zx9 speaker" />
        </div>
        <div className="bottom">
          <h2>
            zx9 <span>speaker</span>
          </h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <SeeProduct class={'dark-btn'} id={6} />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  background: var(--orange-main);
  width: 87.2%;
  margin: 0 auto 24px;
  border-radius: 8px;
  padding: 55px 0;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding-inline: 24px;
    position: relative;
  }

  /* .container::before {
    content: url('../../../assets/home/desktop/pattern-circles.svg');
    pistion: fixed
  } */

  img {
    width: 172px;
    height: 207px;
    margin-bottom: 32px;
  }

  h2 {
    margin-bottom: 24px;
  }

  h2 span {
    color: inherit;
    display: block;
  }

  p {
    margin-bottom: 24px;
    max-width: 349px;
  }

  .dark-btn {
    border: none;
    background: black;
    color: white;
  }

  .dark-btn:hover {
    background: var(--dark-hover);
  }

  @media (min-width: 48em) {
    padding: 52px 0 64px 0;
    margin-bottom: 2rem;

    p {
      margin-bottom: 40px;
    }

    img {
      width: 197.21px;
      height: 237px;
      margin: 0 auto 64px;
    }
  }

  @media (min-width: 90em) {
    margin-bottom: 56px;
    overflow: hidden;
    max-width: 1110px;

    img {
      width: 410px;
      height: 493px;
    }

    h2 {
      justify-content: start;
    }

    .top {
      position: relative;
      bottom: -9rem;
    }

    .container {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      /* gap: 138px; */
    }

    .bottom {
      max-width: 349px;
      text-align: start;
    }
  }
`;

export default ZX9Speaker;
