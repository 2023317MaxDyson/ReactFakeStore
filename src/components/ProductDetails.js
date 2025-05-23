import "./ProductDetails.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const [product, setProduct] = useState([]); // Set the state as a empty array
  const { productId } = useParams(); // Extracts the productId from the URL
  const navigateProductList = useNavigate(); // Navigates back to the main product list

  async function fetchProduct() {
    const response = await fetch(
      `https://fakestoreapi.com/products/${productId}`
    );
    const data = await response.json();
    setProduct(data); // Put the data into the empty array
  }

  useEffect(() => {
    fetchProduct();
  }, [productId]); // Re-fetch the id of the selected product

  function Navigate() {
    navigateProductList("/");
  }

  return (
    <div className="ProductDetails">
      <h3> {product.title} </h3>
      <img className="DetailImage" src={product.image} alt={product.title} />
      <p> Description: {product.description} </p>
      <p> Price: {product.price} </p>
      <p> Category: {product.category} </p>
      <h3> Rating </h3>
      {/* Using optinial chaining ? to idenify if the product.rating exists*/}
      <p> Rate: {product.rating?.rate} </p>
      <p> Count: {product.rating?.count} </p>
      <button onClick={Navigate}>Back to the Products List</button>
    </div>
  );
}
