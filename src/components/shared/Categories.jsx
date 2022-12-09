import styled from 'styled-components';
import { categories } from '../../data';
import { Category } from '../';

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
  margin-top: 92px;
  margin-bottom: 120px;

  @media (min-width: 48em) {
    flex-direction: row;
    gap: 10px;
    max-width: 689px;
    margin-inline: auto;
    margin-block: 96px;
  }

  @media (min-width: 90em) {
    gap: 30px;
    max-width: 1110px;
    margin-top: 120px;
    margin-bottom: 168px;
  }
`;

export default Categories;
