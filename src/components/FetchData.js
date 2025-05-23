import "./FetchData.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function FetchData() {
  const [products, setProduct] = useState([]); // Set the state as an empty array
  const [sortOption, setSortingOption] = useState(""); //Tracks selected sort option
  const [filterOption, setFilterOption] = useState(""); // Tracks selected category option

  async function fetchProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProduct(data); // Put the data into the empty array
  }

  // Handle the sort option change
  function handleSortChange(e) {
    setSortingOption(e.target.value);
  }

  // Handle the category option change
  function handleFilterChange(e) {
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
    fetchProducts();
  }, []);

  return (
    <div className="FetchData">
      <br />
      <br />
      <br />
      <br />
      <select onChange={handleSortChange} value={sortOption}>
        <option value=""> Sort by Price </option>
        <option value="Ascending"> Ascending </option>
        <option value="Descending"> Descending </option>
      </select>
      <select onChange={handleFilterChange} value={filterOption}>
        <option value=""> Filter by Category </option>
        <option value=""> Show all Products </option>
        <option value="men's clothing"> Men's clothing </option>
        <option value="jewelery"> Jewelery </option>
        <option value="electronics">Electronics </option>
        <option value="women's clothing">Womens Clothing </option>
      </select>
      <br />

      {sortAndFilterProducts.map((product) => (
        <div className="container">
          <div key={product.id} className="products">
            <h3>
              {/* This link takes you to products details page and only shows the data of the product you have clicked*/}
              {/* The link shows the id of product you have clicked on */}
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </h3>
            <img src={product.image} alt={product.title} />
            <p> Price: ${product.price} </p>
            <p> Category: {product.category} </p>
          </div>
        </div>
      ))}
    </div>
  );
}
