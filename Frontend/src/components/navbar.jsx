import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import menuIcon from "../assets/menu-burger.svg";
import closeIcon from "../assets/cross.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuRef, buttonRef]);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 p-5 bg-white border-b border-gray-300 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} className="w-8" alt="Logo" />
          <h3 style={{ fontFamily: "'Old Standard TT', serif" }} className="hidden sm:block text-blue-950 text-xl font-bold mt-1">
            HousePricer
          </h3>
        </Link>

        <button
          ref={buttonRef}
          onClick={toggleMenu}
          className="text-gray-700 md:hidden focus:outline-none"
        >
          <img
            src={isOpen ? closeIcon : menuIcon}
            className="w-4 h-4"
            alt="Menu"
          />
        </button>

        {/* Main Menu for larger screens */}
        <div className="hidden lg:flex space-x-6 ml-auto text-base font-semibold ">
          <Link to="/" className="text-blue-900 hover:text-gray-900 hover:underline">Home</Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-gray-900 hover:underline">How It Works</Link>
          <Link to="/price-prediction" className="text-gray-700 hover:text-gray-900 hover:underline">Price Prediction</Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900 hover:underline">About Us</Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900 hover:underline">Contact Us</Link>
        </div>

        {/* Sign In / Register for larger screens */}
        <div className="hidden md:flex items-center ml-8">
          <Link to="/signin" className="mr-6">
            <span className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-4 border border-slate-900 text-slate-900 hover:bg-slate-100 transition">
              Sign in
            </span>
          </Link>
          <Link to="/register">
            <span className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-4 border border-transparent bg-slate-800 text-white hover:bg-slate-950 hover:text-white hover:border-slate-900 transition">
              Register
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform duration-300 z-40 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Logo and Close Button */}
          <div className="flex items-center justify-between p-4 border-b">
            <Link to="/" className="flex items-center space-x-3 mt-3">
              <h3 style={{ fontFamily: "'Old Standard TT', serif" }} className="text-blue-950 text-lg font-bold">
                HousePricer
              </h3>
            </Link>
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <img
                src={isOpen ? closeIcon : menuIcon}
                className="w-4 h-4 mr-auto mt-1 "
                alt="Menu"
              />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col p-4 space-y-4 text-base font-semibold">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-800">Home</Link>
            <Link to="/how-it-works" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-800">How It Works</Link>
            <Link to="/price-prediction" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-800">Price Prediction</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-800">About Us</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-blue-800">Contact Us</Link>
            <Link to="/sign-in" onClick={() => setIsOpen(false)} className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-4 border border-slate-900 text-slate-900 hover:bg-slate-100 hover:text-black transition">
              Sign in
            </Link>
            <Link to="/register" onClick={() => setIsOpen(false)} className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-4 border border-transparent bg-slate-700 text-white hover:bg-slate-950 hover:text-white hover:border-slate-900 transition">
              Register
            </Link>
          </div>
          <div className="mt-auto p-4">
            <p className="text-center text-gray-500">© 2024 HousePricer</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
