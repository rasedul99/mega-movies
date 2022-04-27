import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { APIKey } from "../../common/apis/MovieApiKey";
import { addMovies } from "../../features/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "nothing";
  // console.log(APIKey);
  useEffect(() => {
    const fetchMovies = async () => {
      console.log("inside");
      const response = await axios
        .get(
          `http://www.omdbapi.com/?apikey=${APIKey}&s=${movieText}&type=movie`
        )
        .catch((err) => {
          console.log(err);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
