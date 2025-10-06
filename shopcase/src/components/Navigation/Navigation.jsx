import React from "react";
import { Wishlist } from "../common/Wishlist";
import { AccountIcon } from "../common/AccountIcon";
import { CartIcon } from "../common/CartIcon";
import { Link, NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-8">
      <div className="flex items-center gap-6">
        {/* logo */}
        <h2 className="text-3xl font-bold">Shopcase</h2>
      </div>
      <div className="flex items-center gap-6">
        <ul className="flex gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg font-medium ${
                  isActive ? "text-black" : "text-gray-600 hover:text-gray-900"
                }`
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/men"
              className={({ isActive }) =>
                `text-lg font-medium ${
                  isActive ? "text-black" : "text-gray-600 hover:text-gray-900"
                }`
              }
            >
              Mens
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/women"
              className={({ isActive }) =>
                `text-lg font-medium ${
                  isActive ? "text-black" : "text-gray-600 hover:text-gray-900"
                }`
              }
            >
              Womens
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kids"
              className={({ isActive }) =>
                `text-lg font-medium ${
                  isActive ? "text-black" : "text-gray-600 hover:text-gray-900"
                }`
              }
            >
              Kids
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        {/* search icon */}
        <div className="border rounded flex overflow-hidden">
          <button className="flex items-center justify-center px-4 border focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 focus:outline-none"
            />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/*account icon */}
        <ul className="flex items-center gap-8">
          <li>
            <button>
              <Wishlist />
            </button>
          </li>
          <li>
            <button>
              <AccountIcon />
            </button>
          </li>
          <li>
            <Link to="/cart-items">
              <CartIcon />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
