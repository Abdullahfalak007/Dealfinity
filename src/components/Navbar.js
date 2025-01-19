// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-blue-500 p-4">
//       <div className="container mx-auto flex justify-between">
//         <h1 className="text-white text-2xl font-bold">E-Commerce App</h1>
//         <ul className="flex space-x-4">
//           <li>
//             <Link to="/" className="text-white hover:underline">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/cart" className="text-white hover:underline">
//               Cart
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp"; // Assuming logo is in the assets folder

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the right */}
        <Link to="/" className="ml-auto">
          <img src={logo} alt="Dealfinity Logo" className="h-10" />
        </Link>
        {/* Title */}
        <h1 className="text-white text-2xl font-bold flex-grow text-center">
          Dealfinity
        </h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" className="text-white hover:underline">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
