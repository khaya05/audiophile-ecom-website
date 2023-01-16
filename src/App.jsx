import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Overlay,
  ScrollToTop,
  Cart,
  ThankYouCard,
  Categories,
} from './components';

import {
  Checkout,
  Earphones,
  Error,
  Headphones,
  Home,
  Product,
  SharedLayout,
  Speakers,
} from './pages';
import { cartActions } from './store/cartSlice';

function App() {
  const dispatch = useDispatch();
  const showOverlay = useSelector((state) => state.ui.showOverlay);
  const showCart = useSelector((state) => state.ui.showCart);
  const showThanksCard = useSelector((state) => state.ui.showThanksCard);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const showMenu = useSelector((state) => state.ui.showMenu);

  useEffect(() => {
    dispatch(cartActions.getTotal());
    dispatch(cartActions.getGrandTotal());
    dispatch(cartActions.getVat());
  }, [cartItems, dispatch]);

  return (
    <BrowserRouter>
      {showOverlay && <Overlay />}

      {showMenu && (
        <div className="menu-container">
          <Categories />
        </div>
      )}

      {showCart && (
        <div className="main-cart-container">
          <Cart />
        </div>
      )}

      {showThanksCard && <ThankYouCard />}

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="headphones" element={<Headphones />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="earphones" element={<Earphones />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
