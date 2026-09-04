
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
    <div className="container bg-primary p-5 w-full m-4 sm:p-2 md:p-3 lg:p-4">
      <div className="container bg-white p-6 sm:p-2 md:p-3 lg:p-4">
      <h3 className="text-lg font-semibold p-2 mb-2 text-gray-800 sm:text-sm md:text-base lg:text-lg"> {product.title} </h3>
      <img className="w-80 h-80 p-4 m-6 bg-gray-200 shadow-md sm:text-sm md:text-base lg:text-lg" src={product.image} alt={product.title} />
      <p className="text-md text-gray-800 sm:text-sm md:text-base lg:text-lg"> Description: {product.description} </p>
      <p className="text-lg font-bold bg-gray-200 text-gray-800 rounded-lg p-3 m-3 sm:text-sm md:text-base lg:text-xl"> Price: ${product.price} </p>
      <p className="text-md p-2 m-2 text-gray-800 shadow-md sm:text-sm md:text-base lg:text-lg"> Category: {product.category} </p>
      <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md sm:text-sm md:text-base lg:text-lg">
      <h3 className="text-lg font-semibold mb-2 text-gray-800 sm:text-sm md:text-base lg:text-lg"> Rating </h3>
      {/* Using optinial chaining ? to identify if the product.rating exists*/}
      <p className="text-md  text-gray-800 sm:text-sm md:text-base lg:text-lg"> Rate: {product.rating?.rate} </p>
      <p className="text-md  text-gray-800 sm:text-sm md:text-base lg:text-lg"> Count: {product.rating?.count} </p>
      </div>
      <button onClick={Navigate} className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded sm:text-sm md:text-base lg:text-lg">
        Back to the Products List
      </button>
      </div>
    </div>
  );
}
