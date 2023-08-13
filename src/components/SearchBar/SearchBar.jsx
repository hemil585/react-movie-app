import React, { useState } from "react";
import "./SearchBar.css";
import {BsFillSearchHeartFill} from 'react-icons/bs'
import { useDispatch } from "react-redux";
import { searchMovie } from "../../reducer/movieSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    dispatch(searchMovie(query))
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={handleInputChange}
      />
      <BsFillSearchHeartFill  onClick={handleSearch} className="search-btn" size={'2rem'}/>
    </div>
  );
};

export default SearchBar;
