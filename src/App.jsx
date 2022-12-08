import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Audiophile, Footer, Navbar } from './components';
import { Earphones, Error, Headphones, Home, Product, Speakers } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="headphones" element={<Headphones />} />
        <Route path="speakers" element={<Speakers />} />
        <Route path="earphones" element={<Earphones />} />
        <Route path="product/:id" element={<Product />} />
        <Route path='*' element = {<Error />} />
      </Routes>
      <Audiophile />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
