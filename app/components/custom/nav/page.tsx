"use client";
import React, { useState } from "react";

function Nav() {
  const [searchQuery, setsearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchQuery);
  };

  return (
    <nav className="flex items-center justify-between bg-[rgba(0,0,0,0.2)] backdrop-blur-md py-6 px-8 sticky top- w-full z-10">
      <div className="text-white text-2xl">Movie Mania</div>
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="text-white hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-white hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="/services" className="text-white hover:underline">
            Services
          </a>
        </li>
        <li>
          <a href="/contact" className="text-white hover:underline">
            Contact
          </a>
        </li>
      </ul>
      <form className="flex" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="px-2 py-1 border border-gray-300 focus:outline-none text-black"
        />
        <button
          type="submit"
          className="px-4 py-1 bg-gray-600 text-white hover:bg-gray-700"
        >
          Search
        </button>
      </form>
    </nav>
  );
}

export default Nav;
