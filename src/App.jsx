import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Audiophile,
  Footer,
  Overlay,
  Navbar,
  ScrollToTop,
  Cart,
  ThankYouCard,
} from './components';
import {
  Checkout,
  Earphones,
  Error,
  Headphones,
  Home,
  Product,
  Speakers,
} from './pages';
import { cartActions } from './store/cartSlice';

function App() {
  const dispatch = useDispatch();
  const showOverlay = useSelector((state) => state.ui.showOverlay);
  const showCart = useSelector((state) => state.ui.showCart);
  const showThanksCard = useSelector((state) => state.ui.showThanksCard);
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    dispatch(cartActions.getTotal());
    dispatch(cartActions.getGrandTotal());
    dispatch(cartActions.getVat());
  }, [cartItems]);

  return (
    <BrowserRouter>
      {showOverlay && <Overlay />}

      {showCart && (
        <div className="main-cart-container">
          <Cart />
        </div>
      )}

      {showThanksCard && <ThankYouCard />}

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
