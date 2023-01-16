import { Link } from 'react-router-dom';

function Error() {
  return (
    <>
      <h2>
        404<span>page not found</span>
      </h2>
      <Link to={'./'}>Back home</Link>
    </>
  );
}

export default Error;
