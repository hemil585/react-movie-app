import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "./reducer/movieSlice";
import axios from "axios";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const query = useSelector(state=>state.movies.searchMovie)
  console.log(query);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const { data } = await axios.get(
          `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${query}&opening-date=1980-01-01:2023-01-01&api-key=${process.env.REACT_APP_API_KEY}`
        );
        console.log(data.results);
        dispatch(addMovies(data.results));
      } catch (error) {
        console.error("Error fetching API:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, [query]);

  return (
    <>
      <div className="App">
        <Navbar />
        {loading ? <div className="loading-spinner"></div> : null}
      </div>
      <Footer />
    </>
  );
};

export default App;
