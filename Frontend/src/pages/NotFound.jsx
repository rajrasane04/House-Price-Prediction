import React from "react";
import { Typography } from "@material-tailwind/react";
import { FlagIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom"; 

export function NotFound() {
  return (
    <div className="h-screen grid place-items-center text-center px-8">
      <div className="py-6"> 
        <FlagIcon className="w-16 h-16 mx-auto" /> 
        <Typography
          variant="h1"
          color="blue-gray"
          className="mt-4 text-3xl md:text-4xl font-bold leading-snug"
        >
          Error 404 <br /> It looks like something went wrong.
        </Typography>
        <Typography className="mt-4 mb-6 text-lg font-normal text-gray-500 mx-auto md:max-w-sm">
          Don&apos;t worry, our team is already on it. Please try refreshing
          the page or come back later.
        </Typography>
        <Link
          to="/"
          className="w-full px-4 py-3 md:w-[8rem] text-sm font-medium text-slate-900 bg-transparent border border-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 text-center inline-block"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
