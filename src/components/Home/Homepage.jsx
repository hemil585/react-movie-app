import React from "react";
import "./Homepage.css";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { nanoid } from "@reduxjs/toolkit";
import { addLikedMovies, removeLikedMovies } from "../../reducer/likedMovies";
import SearchBar from "../SearchBar/SearchBar";

const Homepage = () => {
  const data = useSelector((state) => state.movies.movies);
  const likedMovies = useSelector((state) => state.likedMovies.likedMovies);
  const dispatch = useDispatch();

  const toggleLike = (movie) => {
    const isLiked =
      likedMovies.filter((likedMovie) => likedMovie.id === movie.id).length > 0;
    if (isLiked) {
      dispatch(removeLikedMovies(movie.id));
    } else {
      dispatch(addLikedMovies(movie));
    }
  };

  console.log(likedMovies);
  return (
    <div className="homepage-container">
      <SearchBar />
      <div className="card-container">
        {data.map((movie) => (
          <div className="movie-card" key={nanoid()}>
            <img
              src={movie.multimedia.src}
              alt={`${movie.display_title} image`}
              width={300}
              height={300}
            ></img>
            <h3>{movie.display_title}</h3>
            <h5>({movie.publication_date.substr(0, 4)})</h5>
            <p>{movie.summary_short}</p>
            <a
              href={movie.link.url}
              target="_blank"
              className="view-more color"
            >
              View More
            </a>
            <button onClick={() => toggleLike(movie)} className="like-btn">
              {likedMovies.filter((likedMovie) => likedMovie.id === movie.id)
                .length > 0 ? (
                <AiFillHeart size={"4rem"} />
              ) : (
                <AiOutlineHeart size={"4rem"} />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
