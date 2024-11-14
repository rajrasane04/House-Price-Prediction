import React from "react";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import NotFoundImage from "/src/assets/illustration3.svg"; 

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-6 ">
      <div className="space-y-6 max-w-md mx-auto">
        {/* Image with larger size and responsive scaling */}
        <img 
          src={NotFoundImage} 
          alt="Curiosity"
          className="w-4/5 max-w-sm sm:max-w-md mt-8 mx-auto" 
        />
        <Typography
          variant="h1"
          color="blue-gray"
          className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-gray-800"
        >
          Error 404
        </Typography>
        <Typography className="text-base sm:text-lg md:text-xl font-normal text-gray-500 mx-auto px-2 sm:px-0">
        Oops! Check the URL or go back to the homepage.
        </Typography>
        {/* Button for Home Navigation */}
        <div className="mt-8"> 
          <Link
            to="/"
            className="w-full sm:w-1/2 md:w-[10rem] px-6 py-3 text-sm font-medium text-slate-900 bg-transparent border border-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;