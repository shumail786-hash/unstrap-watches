import "./App.css";
import { Nav } from "./components";
import Footer from "./components/Footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Shop, About, ProductDetail, Cart } from "./pages";
import { useSelector } from "react-redux";
import Testimonial from "./components/Testimonial/Testimonial";
import Faq from "./pages/FAQ/Faq";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const toggler = useSelector((state) => state.cartToggle);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        <Footer />
        <ToastContainer autoClose={1200} />
      </BrowserRouter>
    </>
  );
}

export default App;
