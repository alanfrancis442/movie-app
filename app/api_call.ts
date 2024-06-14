import axios from "axios";
import { headers } from "next/headers";

const api_key = process.env.NEXT_PUBLIC_TMDB_MOVIE_API_KEY;
const base_url = "https://api.themoviedb.org/3";

const Get_movies = async (name: string) => {
  let movies = [];

  try {
    let response = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}&s=${name}`
    );
    movies = await response.data;
  } catch (err) {
    console.log(err);
  }
  return movies;
};

const get_trendign_movies = async () => {
  let movies = [];
  try {
    let response = await axios.get(
      `${base_url}/trending/movie/day?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_MOVIE_API_AUTH}`,
          accept: "application/json",
        },
      }
    );
    // console.log("trending",response.data.results);
    movies = await response.data.results;
  } catch (err) {
    console.log(err);
  }

  return movies;
};

const get_top_rated = async () => {
  let movies = [];
  try {
    let response = await axios.get(`${base_url}/tv/top_rated?language=en-US`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_MOVIE_API_AUTH}`,
        accept: "application/json",
      },
    });
    // console.log("trending",response.data.results);
    movies = await response.data.results;
  } catch (err) {
    console.log(err);
  }

  return movies;
};

const get_trendign_tvshows = async () => {
  let movies = [];
  try {
    let response = await axios.get(
      `${base_url}/trending/tv/day?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_MOVIE_API_AUTH}`,
          accept: "application/json",
        },
      }
    );
    // console.log("trending",response.data.results);
    movies = await response.data.results;
  } catch (err) {
    console.log(err);
  }

  return movies;
};

//https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1
const search_movie = async (name: string) => {
  let movies = [];
  try {
    let response = await axios.get(
      `${base_url}/search/movie?query=${name}include_adult=false&language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_MOVIE_API_AUTH}`,
          accept: "application/json",
        },
      }
    );
    movies = await response.data;
  } catch (err) {
    console.log(err);
  }
  return movies;
};

const air_today = async () => {
  let movies = [];
  try {
    let response = await axios.get(
      `${base_url}/tv/airing_today?language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_MOVIE_API_AUTH}`,
          accept: "application/json",
        },
      }
    );
    // console.log("trending",response.data.results);
    movies = await response.data.results;
  } catch (err) {
    console.log(err);
  }

  return movies;
};

// export default Get_movies;
export {
  get_trendign_movies,
  Get_movies,
  search_movie,
  get_trendign_tvshows,
  get_top_rated,
  air_today,
};
