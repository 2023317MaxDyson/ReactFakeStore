import Home from "./components/Home.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-r from-orange-400 to-blue-500">
        <h2 className="text-3xl font-bold underline text-white p-4"> Fake Store </h2>
        <Routes>
          {/* The fetch data component is the main product list*/}
          <Route path="/" index element={<Home/>} />
          {/* :productId is as parameter */}
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
