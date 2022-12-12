import styled from 'styled-components';
import { CategoriesPage } from '../components';
import { data } from '../data';

function Speakers() {
  const speakers = data.filter(({ category }) => category === 'speakers');

  return <CategoriesPage heading={'speakers'} products={speakers} />;
}

const Container = styled.article``;

export default Speakers;
