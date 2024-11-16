import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import menuIcon from "../assets/menu-burger.svg";
import closeIcon from "../assets/cross.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();
  const dropdownRef = useRef(); // New ref for profile dropdown
  const navigate = useNavigate();

  // Check if the user is in session
  const token = localStorage.getItem("authToken");

  // To store the profile image URL
  const [profileImageUrl, setProfileImageUrl] = useState("");

  useEffect(() => {
    if (token) {
      // Fetch the user data from the backend to get the profile image
      const fetchUserProfile = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_SERVER_DOMAIN}/api/user/profile`, {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            setProfileImageUrl(data.profile_img); // Set the profile image URL from backend
          } else {
            console.error("Failed to fetch user profile");
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      };

      fetchUserProfile();
    }
  }, [token]);
  
  const handleLogout = () => {
    // Remove the auth token from localStorage
    localStorage.removeItem("authToken");

    setDropdownOpen(false); // Close the dropdown
    setIsOpen(false); // Close the mobile menu if open

    navigate("/"); // Redirect to the sign-in page
  };

  useEffect(() => {
    // Close the dropdown and menu when clicking outside
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 md:hidden focus:outline-none"
        >
          <img
            src={isOpen ? closeIcon : menuIcon}
            className="w-4 h-4"
            alt="Menu"
          />
        </button>
  
        {/* Main Menu for larger screens */}
        <div className="hidden lg:flex space-x-6 ml-auto text-base font-semibold">
          <Link to="/" className="text-blue-900 hover:text-gray-900 hover:underline">Home</Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-gray-900 hover:underline">How It Works</Link>
          <Link to="/price-prediction" className="text-gray-700 hover:text-gray-900 hover:underline">Price Prediction</Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900 hover:underline">About Us</Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900 hover:underline">Contact Us</Link>
        </div>
  
        {/* Sign In / Register for larger screens */}
        <div className="hidden md:flex items-center ml-8">
          {token ? (
            <div className="relative">
              <button 
                className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center"
                onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown
                ref={buttonRef}
              >
                <img
                  src={profileImageUrl}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              </button>
  
              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div 
                  ref={dropdownRef}
                  className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md z-50"
                >
                  <button 
                    onClick={handleLogout} 
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/signin" className="mr-6">
                <span className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-4 border border-slate-900 text-slate-900 hover:bg-slate-100 transition">
                  Sign in
                </span>
              </Link>
              <Link to="/register">
                <span className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-4 bg-slate-900 text-white hover:bg-slate-800 transition">
                  Register
                </span>
              </Link>
            </>
          )}
        </div>
      </div>
  
      {/* Mobile Menu (Only visible if isOpen is true) */}
      {isOpen && (
        <div
          ref={menuRef}
          className="lg:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-300 shadow-md z-50 transition ease-in-out duration-300"
        >
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link to="/" className="text-blue-900 hover:text-gray-900 hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-gray-900 hover:underline" onClick={() => setIsOpen(false)}>How It Works</Link>
            <Link to="/price-prediction" className="text-gray-700 hover:text-gray-900 hover:underline" onClick={() => setIsOpen(false)}>Price Prediction</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 hover:underline" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 hover:underline" onClick={() => setIsOpen(false)}>Contact Us</Link>
  
            {/* Profile dropdown for mobile screens */}
            {token ? (
              <div className="relative mt-4">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown
                  className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center"
                >
                  <img
                    src={profileImageUrl}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div 
                    ref={dropdownRef}
                    className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md z-50"
                  >
                    <button 
                      onClick={() => { handleLogout(); setDropdownOpen(false); }} // Close dropdown on Logout
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-4 mt-4">
                <Link to="/signin" onClick={() => setIsOpen(false)}>
                  <span className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-4 border border-slate-900 text-slate-900 hover:bg-slate-100 transition">
                    Sign in
                  </span>
                </Link>
                <Link to="/register" onClick={() => setIsOpen(false)}>
                  <span className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-4 bg-slate-900 text-white hover:bg-slate-800 transition">
                    Register
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
