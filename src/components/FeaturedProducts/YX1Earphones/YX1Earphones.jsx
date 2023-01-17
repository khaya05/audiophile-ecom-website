import styled from 'styled-components';
// import SeeProduct from '../../UI/SeeProduct';
import MobileImg from '../../../assets/home/mobile/image-earphones-yx1.jpg';
import TabImg from '../../../assets/home/tablet/image-earphones-yx1.jpg';
import DesktopImg from '../../../assets/home/desktop/image-earphones-yx1.jpg';

function YX1Earphones() {
  return (
    <Container>
      <div className="top">
        <picture>
          <source media="(min-width:90em)" srcSet={DesktopImg}></source>
          <source media="(min-width:48em)" srcSet={TabImg}></source>
          <img src={MobileImg} alt="yx1 earphones" />
        </picture>
      </div>

      <div className="bottom">
        <h2>yx1 earphones</h2>
        {/* <SeeProduct class={'dark-btn'} id={1} /> */}
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 87.2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  margin-inline: auto;
  margin-bottom: 120px;

  .top,
  .bottom,
  img {
    width: 100%;
    height: 200px;
    border-radius: 8px;
    object-fit: cover;
  }

  .bottom {
    background: var(--light-gray);
    padding: 48px 24px;
    h2 {
      text-align: start;
      margin-bottom: 2rem;
      font-size: 28px;
    }
  }

  @media (min-width: 48em) {
    gap: 11px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 96px;

    .top,
    .bottom,
    img {
      height: 320px;
    }

    .bottom {
      padding-top: 101px;
    }
  }

  @media (min-width: 90em) {
    gap: 30px;
    max-width: 1110px;
    margin-bottom: 200px;
  }
`;
export default YX1Earphones;
