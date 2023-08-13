import React from "react";
import './Navbar.css'
import { Link, Route, Routes } from "react-router-dom";
import Homepage from "../Home/Homepage";
import Favourites from "../Favourites/Favourites";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <Link to="/" className="text">
            <li>Home</li>
          </Link>
          <Link to="/favourites" className="text">
            <li>Favourites</li>
          </Link>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </>
  );
};

export default Navbar;
