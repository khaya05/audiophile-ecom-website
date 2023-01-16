import { CategoriesPage } from '../components';
import { data } from '../data';

function Earphones() {
  const earphones = data.filter(({ category }) => category === 'earphones');

  return <CategoriesPage heading={'earphones'} products={earphones} />;
}


export default Earphones;
