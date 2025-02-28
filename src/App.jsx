import "./index.css";
import Navbar from "./Components/Nav/Navbar";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./Components/Container/Container";
import "./App.css";
import Header from "./Components/Header/Header";
import HeaderTwo from "./Components/HeaderTwo/HeaderTwo";
import Store from "./Pages/Store/Store";
import Contact from "./Pages/ContactUs/Contact";
import Womens from "./Pages/Womens/Womens";
import Mens from "./Pages/Mens/Mens";
import "wicg-inert";
import Footer from "./Components/Footer/Footer";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Shopingcontext from "./ShopingCartContext/Shopingcontext";
import CartProduct from "./Pages/Cart/CartProduct";

function App() {
  return (
    <>
      <Shopingcontext>
        <BrowserRouter>
        
            <Header />
            <HeaderTwo />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/women" element={<Womens />} />
              <Route path="/men" element={<Mens />} />
              <Route path="/cart" element={<CartProduct />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
        
          <Footer />
        </BrowserRouter>
      </Shopingcontext>
    </>
  );
}

export default App;
