import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-5 border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} className="w-8" alt="Logo" />
          <h3 className="hidden md:block text-blue-950 text-xl font-bold pt-0.3">HousePricer</h3>
        </Link>

        <div className="hidden md:flex space-x-7 ml-auto mr-12 text-base font-semibold">
          <Link to="/" className="text-gray-700 hover:text-gray-900 transition duration-200">Home</Link>
          <Link to="/how-it-works" className="hidden lg:block text-gray-700 hover:text-gray-900 transition duration-200">How It Works</Link>
          <Link to="/price-prediction" className="hidden lg:block text-gray-700 hover:text-gray-900 transition duration-200">Price Prediction</Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900 transition duration-200">About Us</Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition duration-200">Contact Us</Link>
        </div>

        <Link to="/login">
          <button className="bg-blue-950 text-white rounded-3xl py-2 px-5 text-sm hover:bg-opacity-85 ">
            <p className="mb-1">Login</p>
          </button>
        </Link>
      </div>

      <div className="md:hidden flex flex-col space-y-2 mt-2">
        <Link to="/" className="text-gray-700 hover:text-gray-900 transition duration-200 hidden">Home</Link>
        <Link to="/how-it-works" className="text-gray-700 hover:text-gray-900 transition duration-200 hidden">How It Works</Link>
        <Link to="/price-prediction" className="text-gray-700 hover:text-gray-900 transition duration-200 hidden">Price Prediction</Link>
        <Link to="/about" className="text-gray-700 hover:text-gray-900 transition duration-200 hidden">About Us</Link>
        <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition duration-200 hidden">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
