import styled from 'styled-components';
import { CategoriesPage } from '../components';
import { data } from '../data';

function Headphones() {
  const headphones = data.filter(({ category }) => category === 'headphones');

  return <CategoriesPage heading={'headphones'} products={headphones} />;
}

const Container = styled.article``;

export default Headphones;
