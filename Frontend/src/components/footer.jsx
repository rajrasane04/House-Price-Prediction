import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative w-full pt-6 border-t-2 border-blue-950">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography
            variant="h5"
            className="mb-6 font-serif text-xl"
            style={{ fontFamily: "'Old Standard TT', serif" }}
          >
            HousePricer
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as={Link} // Use Link instead of <a> for react-router-dom
                      to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} // Convert link text to lowercase, replace spaces with hyphens
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} HousePricer. All Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            {/* Social Media Icons */}
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17z"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.572 10.087l-.714 3.11h2.612l.486 2.112c.055.226.213.45.455.504h1.384c.155 0 .31-.105.416-.254.042-.054.086-.118.12-.183.194-.353.1-.785-.195-1.135l-1.804-2.107a1.241 1.241 0 00-1.425-.348c-.066.03-.125.062-.187.101a.95.95 0 01-.107.058l-.134-.358-.02-.053-.01-.025c-.033-.086-.074-.168-.123-.246a1.045 1.045 0 00-.232-.298l-.005-.004zm2.056.004c-.462.09-.776.442-.818.793l-.079.517a.895.895 0 01-.202-.096l-.135-.07-.076-.039a.856.856 0 01-.362-.331l-.014-.026.045-.247.084-.46c.049-.267.238-.493.505-.563.267-.071.564.02.748.193.103.099.187.224.236.371.108.328.007.694-.222.912a.755.755 0 01-.463.164zm-1.245-5.142A8.5 8.5 0 013.5 12a8.5 8.5 0 0017 0 8.5 8.5 0 00-8.5-8.5z"/>
              </svg>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
