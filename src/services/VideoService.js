import axios from "axios";

const getMoviePopular = (page) => {
  const url =
    process.env.REACT_APP_API_URL +
    "movie/popular?api_key=" +
    process.env.REACT_APP_API_KEY +
    "&language=en-US&page=" +
    page;
  return axios.get(url);
};

const getSeriesPopular = (page) => {
  const url =
    process.env.REACT_APP_API_URL +
    "tv/popular?api_key=" +
    process.env.REACT_APP_API_KEY +
    "&language=en-US&page=" +
    page;
  return axios.get(url);
};

const getMovieTop = (page) => {
  const url =
    process.env.REACT_APP_API_URL +
    "movie/top_rated?api_key=" +
    process.env.REACT_APP_API_KEY +
    "&language=en-US&page=" +
    page;

  return axios.get(url);
};

const getSeriesTop = (page) => {
  const url =
    process.env.REACT_APP_API_URL +
    "tv/top_rated?api_key=" +
    process.env.REACT_APP_API_KEY +
    "&language=en-US&page=" +
    page;

  return axios.get(url);
};

const getGenresMovie = () => {
  const url =
    process.env.REACT_APP_API_URL +
    "genre/movie/list?api_key=" +
    process.env.REACT_APP_API_KEY +
    "&language=en-US";

  return axios.get(url);
};

const getGenresTv = () => {
  const url =
    process.env.REACT_APP_API_URL +
    "genre/tv/list?api_key=" +
    process.env.REACT_APP_API_KEY +
    "&language=en-US";

  return axios.get(url);
};

const getGenreString = (genre) => {
  let genreString = "";
  genre.map((item, index) => {
    if (index > 0) {
      genreString += ",";
    }
    genreString += item;
  });

  return genreString;
};
const getMovieByGenre = (page, genre) => {
  const url =
    process.env.REACT_APP_API_URL +
    "discover/movie?api_key=" +
    process.env.REACT_APP_API_KEY +
    "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" +
    getGenreString(genre) +
    "&page=" +
    page;


  return axios.get(url);
};

const getSeriesByGenre = (page, genre) => {
  const url =
    process.env.REACT_APP_API_URL +
    "discover/tv?api_key=" +
    process.env.REACT_APP_API_KEY +
    "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" +
    getGenreString(genre) +
    "&page=" +
    page;


  return axios.get(url);
};

const searchVideos = (page, keyword, type) => {
  let url =
    process.env.REACT_APP_API_URL +
    "search/movie?api_key=" +
    process.env.REACT_APP_API_KEY +
    "&query=" +
    keyword +
    "&page=" +
    1;

  if (type == 2) {
    url =
      process.env.REACT_APP_API_URL +
      "search/tv?api_key=" +
      process.env.REACT_APP_API_KEY +
      "&query=" +
      keyword +
      "&page=" +
      1;
  }


  return axios.get(url);
};

const VideoService = {
  getMoviePopular,
  getSeriesPopular,
  getMovieTop,
  getSeriesTop,
  getGenresMovie,
  getGenresTv,
  getMovieByGenre,
  getSeriesByGenre,
  searchVideos,
};

export default VideoService;
