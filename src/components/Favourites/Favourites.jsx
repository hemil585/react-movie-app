import React from "react";
import { useSelector } from "react-redux";
import "../Home/Homepage.css";
import { nanoid } from "@reduxjs/toolkit";

const Favourites = () => {
  const likedMovies = useSelector((state) => state.likedMovies.likedMovies);
  return (
    <div className="homepage-container">
      <div className="card-container">
        {likedMovies.length === 0 ? (
          <p>You haven't liked any movies yet.</p>
        ) : (
          likedMovies.map((movie) => (
            <div className="movie-card" key={nanoid()}>
              <img
                src={movie.multimedia.src}
                alt={`${movie.display_title} image`}
                width={180}
                height={200}
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
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favourites;
