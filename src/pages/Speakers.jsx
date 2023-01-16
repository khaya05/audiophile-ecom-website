import { CategoriesPage } from '../components';
import { data } from '../data';

function Speakers() {
  const speakers = data.filter(({ category }) => category === 'speakers');

  return <CategoriesPage heading={'speakers'} products={speakers} />;
}

export default Speakers;
