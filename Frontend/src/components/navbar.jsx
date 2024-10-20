import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="p-5 border-b border-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} className="w-10" alt="Logo" />
          <h3 className="hidden md:block text-blue-950 text-2xl font-bold pt-0.3 ">HousePricer</h3>
        </Link>

        <div className="hidden md:flex space-x-9 ml-auto mr-12 text-lg font-medium">
          <Link to="/" className="text-gray-700 hover:text-gray-900 transition duration-200">Home</Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-gray-900 transition duration-200">How It Works</Link>
          <Link to="/price-prediction" className="text-gray-700 hover:text-gray-900 transition duration-200">Price Prediction</Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900 transition duration-200">About Us</Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition duration-200">Contact Us</Link>
        </div>

        <Link to="/login">
          <button className="bg-blue-950 text-white rounded-2xl py-2 px-6 text-base hover:bg-opacity-85 ">
            <p className="mb-1">Login</p>
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;
