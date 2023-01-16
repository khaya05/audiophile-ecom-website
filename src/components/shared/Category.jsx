import styled from 'styled-components';
import ShopBtn from '../UI/ShopBtn';

function Category({ img, name }) {
  return (
    <Container>
      <img src={img} alt="category" />
      <h3>{name}</h3>

      <div className="btn-container">
        <ShopBtn path={name} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--light-gray);
  position: relative;
  height: 165px;
  width: 100%;
  border-radius: 8px;
  text-align: center;
  padding-top:88px;

  img {
    position: absolute;
    left: calc(50% - 73.5px);
    width: 147px;
    top: -3rem;
  }

  h3 {

  }
`;

export default Category;
