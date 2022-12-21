import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Audiophile, Footer, Overlay, Navbar, ScrollToTop, Cart } from './components';
import {
  Checkout,
  Earphones,
  Error,
  Headphones,
  Home,
  Product,
  Speakers,
} from './pages';

function App() {
  const showOverlay = useSelector((state) => state.ui.showOverlay);
  const showCart = useSelector((state) => state.ui.showCart);

  return (
    <BrowserRouter>
      {showOverlay && <Overlay />}

      {showCart && (
        <div className="main-cart-container">
          <Cart />
        </div>
      )}

      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="headphones" element={<Headphones />} />
        <Route path="speakers" element={<Speakers />} />
        <Route path="earphones" element={<Earphones />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Audiophile /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
