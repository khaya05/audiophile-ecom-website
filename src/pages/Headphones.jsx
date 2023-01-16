import { CategoriesPage } from '../components';
import { data } from '../data';

function Headphones() {
  const headphones = data.filter(({ category }) => category === 'headphones');

  return <CategoriesPage heading={'headphones'} products={headphones} />;
}

export default Headphones;
