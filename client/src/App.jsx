import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./components/Footer/Footer";
import men_banner from "../src/assets/Banners/men-banner1.png";
import women_banner from "../src/assets/Banners/women-banner1.png";
import kid_banner from "../src/assets/Banners/kid-banner.png";
function App() {
  return (
    <>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          {/* <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />} /> */}

          <Route path="/product/:productId" element={<Product />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<LoginSignup />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
