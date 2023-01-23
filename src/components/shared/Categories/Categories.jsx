import styled from 'styled-components';
import { categories } from '../../../data';
import { Category } from '../..';

function Categories() {
  return (
    <Container>
      {categories.map(({ id, name, img }) => (
        <Category key={id} name={name} img={img} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 68px;
  margin: 92px auto 120px ;
  width: 87.2%;

  @media (min-width: 48em) {
    flex-direction: row;
    gap: 10px;
    margin: 96px auto;
  }

  @media (min-width: 90em) {
    gap: 30px;
    max-width: 1110px;
    margin:120px  auto 168px;
  }
`;

export default Categories;
