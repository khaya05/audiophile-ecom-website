import { Outlet, useLocation } from 'react-router-dom';
import { Audiophile, Footer, Navbar } from '../components';

function SharedLayout() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Outlet />
      {location.pathname !== '/checkout' && <Audiophile />}
      <Footer />
    </>
  );
}

export default SharedLayout;
