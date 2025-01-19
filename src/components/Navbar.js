import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import {
  HomeIcon,
  ShoppingCartIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/outline";

const Navbar = ({ toggleTheme }) => {
  return (
    <nav className="rounded-b-xl bg-blue-500 dark:bg-gray-800 p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="mr-auto">
          <img src={logo} alt="Dealfinity Logo" className="h-10 rounded-full" />
        </Link>

        {/* Dealfinity Title - Clickable */}
        <Link
          to="/"
          className="text-white text-2xl font-bold flex-grow text-center hover:text-gray-300 transition-all"
        >
          Dealfinity
        </Link>

        {/* Navbar Links with Icons */}
        <ul className="flex space-x-4 items-center">
          <li>
            <Link
              to="/"
              className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              <HomeIcon className="h-6 w-6" />
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
            >
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="bg-gray-300 text-gray-800 p-2 rounded-full ml-auto hover:bg-gray-400 transition-all"
            >
              {document.documentElement.className === "light" ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
