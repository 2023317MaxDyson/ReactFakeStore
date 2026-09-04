import Home from "./pages/Home.jsx";
import Products from './pages/Products.jsx';
import ProductDetails from "./pages/ProductDetails.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-r from-orange-400 to-blue-500">
       <div className="flex flex-row justify-center items-center  p-4 sm:text-sm md:text-base lg:text-lg">
        <h2 className="m-5 text-3xl font-bold underline text-white p-4"> Fake Store </h2>
         <NavBar />
         </div>
        <Routes>
          {/* The fetch data component is the main product list*/}
          <Route path="/" index element={<Home/>} />
          {/* :productId is as parameter */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
