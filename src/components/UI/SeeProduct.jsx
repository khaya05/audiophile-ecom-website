import { Link } from 'react-router-dom';
import './SeeProduct.scss';

function SeeProduct(props) {
  return (
    <Link
      to={'/'}
      className={`see-product-btn ${
        props.class === 'orange' ? 'orange-btn' : 'dark-btn'
      }`}
    >
      See Product
    </Link>
  );
}

export default SeeProduct;
