import { Link } from "react-router-dom";

export default function NavBar() {

    
return(
  <nav className=" text-white p-4">
    <div className="container mx-auto">
        <Link to="/" className="text-white hover:text-gray-300 sm:text-sm md:text-base lg:text-lg">Home</Link>
        <Link to="/products" className="ml-4 text-white hover:text-gray-300 sm:text-sm md:text-base lg:text-lg"> Products </Link>
        <Link to="/products" className="ml-4 text-white hover:text-gray-300 sm:text-sm md:text-base lg:text-lg"> Carts </Link>
    </div>
  </nav>
)

}