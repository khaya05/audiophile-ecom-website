import { useNavigate } from 'react-router-dom';
import './SeeProduct.scss';

function SeeProduct(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (props.id === 1) {
      navigate('/product/1');
    }

    if (props.id === 2) {
      navigate('/product/2');
    }

    if (props.id === 3) {
      navigate('/product/3');
    }

    if (props.id === 4) {
      navigate('/product/4');
    }

    if (props.id === 5) {
      navigate('/product/5');
    }

    if (props.id === 6) {
      navigate('/product/6');
    }

    if (props.id === 7) {
      navigate('/product/7');
    }
  };

  return (
    <button
      className={`main-btn ${
        props.class === 'orange' ? 'orange-btn' : 'dark-btn'
      }`}
      onClick={handleClick}
    >
      See Product
    </button>
  );
}

export default SeeProduct;
