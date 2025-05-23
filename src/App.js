import "./styles.css";
import FetchData from "./components/FetchData.js";
import ProductDetails from "./components/ProductDetails.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2> Fake Store </h2>
        <br />
        <Routes>
          {/* The fetch data component is the main product list*/}
          <Route path="/" index element={<FetchData/>} />
          {/* :productId is as parameter */}
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
