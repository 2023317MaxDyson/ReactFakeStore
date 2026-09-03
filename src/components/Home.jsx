
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProduct] = useState([]); // Set the state as an empty array
  const [sortOption, setSortingOption] = useState(""); //Tracks selected sort option
  const [filterOption, setFilterOption] = useState(""); // Tracks selected category option

  async function fetchallProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProduct(data); // Put the data into the empty array
  }

  // Handle the sort option change
  function handleSortChange(e) {
    setSortingOption(e.target.value);
  }

  // Handle the category option change
  function handleFilterChange(e) {0
    setFilterOption(e.target.value);
  }

  // Sort and filter products based on the selected option
  const sortAndFilterProducts = [...products]
    .filter((products) => {
      if (filterOption == "") return true;
      // The filterOption value has to match the value from the products category
      return products.category == filterOption;
    })
    .sort((a, b) => {
      if (sortOption == "Ascending") {
        return a.price - b.price;
      } else if (sortOption == "Descending") {
        return b.price - a.price;
      }
    });

  useEffect(() => {
    fetchallProducts();
  }, []);

  return (
    <div className="container p-5 m-4 sm:p-2 md:p-3 lg:p-4">
      <div className="flex justify-center items-center sm:flex-col md:flex-row lg:flex-row">
      <select className="rounded-lg p-2 m-2 bg-orange-400 text-white hover:bg-orange-500 sm:text-sm md:text-base lg:text-lg" onChange={handleSortChange} value={sortOption}>
        <option value=""> Sort by Price </option>
        <option value="Ascending"> Ascending </option>
        <option value="Descending"> Descending </option>
      </select>
      <select className="rounded-lg p-2 m-2 bg-orange-400 text-white hover:bg-orange-500 sm:text-sm md:text-base lg:text-lg" onChange={handleFilterChange} value={filterOption}>
        <option value=""> Filter by Category </option>
        <option value=""> Show all Products </option>
        <option value="men's clothing"> Men's clothing </option>
        <option value="jewelery"> Jewelery </option>
        <option value="electronics">Electronics </option>
        <option value="women's clothing">Womens Clothing </option>
      </select>
      </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {sortAndFilterProducts.map((product) => (
        <div className="border border-gray-300 rounded-lg p-4 m-6 hover:bg-gray-200 sm:col-span-1 md:col-span-1 lg:col-span-1">
          <div key={product.id} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-blue-500 sm:text-base md:text-lg lg:text-xl">
              {/* This link takes you to products details page and only shows the data of the product you have clicked*/}
              {/* The link shows the id of product you have clicked on */}
                {product.title}
            </h3>
              <Link className="rounded-lg font-bold underline text-blue-900 p-4 hover:font-bold underline sm:text-sm md:text-base lg:text-lg" to={`/products/${product.id}`}>View Details</Link>
            <img className="w-50 h-60 mt-6 mb-4 bg-gray-200 shadow-md sm:text-sm md:text-base lg:text-lg" src={product.image} alt={product.title} />
            <p className="text-lg font-bold bg-gray-200 text-gray-800 rounded-lg p-3 m-3 sm:text-sm md:text-base lg:text-xl"> Price: ${product.price} </p>
            <p className="text-md text-gray-800 shadow-md sm:text-sm md:text-base lg:text-lg"> Category: {product.category} </p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
