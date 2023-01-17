import styled from 'styled-components';
import MobileBgImage from '../../../assets/home/mobile/image-speaker-zx7.jpg';
import TabBgImage from '../../../assets/home/tablet/image-speaker-zx7.jpg';
import DesktopBgImage from '../../../assets/home/desktop/image-speaker-zx7.jpg';
// import SeeProduct from '../../UI/SeeProduct';

function ZX7Speaker() {
  return (
    <Wrapper>
      <h2>ZX7 speaker</h2>
      {/* <SeeProduct class="dark-btn" id={5} /> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 87.2%;
  height: 320px;
  border-radius: 8px;
  margin-inline: auto;
  background-image: url(${MobileBgImage});
  background-repeat: no-repeat;
  object-fit: contain;
  background-size: 100%;
  padding: 101px 24px 0;
  margin-bottom: 24px;

  h2 {
    font-size: 28px;
    text-align: start;
    margin-bottom: 32px;
  }

  .dark-btn {
    background-color: transparent;
    background-image: none;
  }

  @media (min-width: 48em) {
    margin-bottom: 32px;
    padding-left: 63.5px;
    background-image: url(${TabBgImage});
  }

  @media (min-width: 90em) {
    margin-bottom: 48px;
    padding-left: 63.5px;
    max-width: 1110px;
    background-image: url(${DesktopBgImage});
  }
`;

export default ZX7Speaker;
