import { useParams } from 'react-router-dom';
import { SingleProductPage } from '../components';
import { data } from '../data';

function Product() {
  const { id } = useParams();
  const product = data.filter((item) => item.id === +id);
  return (
    <>
      <SingleProductPage product={product} />
    </>
  );
}

export default Product;
