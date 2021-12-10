import axios from "axios";

const getMovieDetail = (movieId) => {
  const url =
    process.env.REACT_APP_API_URL +
    "movie/580489?api_key=" +
    process.env.REACT_APP_API_KEY +
    "&language=en-US";
  return axios.get(url);
};

const getSeriesDetail = (seriesId) => {
  const url =
    process.env.REACT_APP_API_URL +
    "tv/71912?api_key=" +
    process.env.REACT_APP_API_KEY +
    "&language=en-US";
  return axios.get(url);
};

const getMovieExternalId = (movieId) => {
  const url =
    process.env.REACT_APP_API_URL +
    "movie/580489/external_ids?api_key=" +
    process.env.REACT_APP_API_KEY +
    "&language=en-US";
  return axios.get(url);
};

const getSeriesExternalId = (seriesId) => {
  const url =
    process.env.REACT_APP_API_URL +
    "tv/71912/external_ids?api_key=" +
    process.env.REACT_APP_API_KEY +
    "&language=en-US";
  return axios.get(url);
};

const getSimilarMovies = (movieId) => {
  const url =
    process.env.REACT_APP_API_URL +
    "movie/580489/similar?api_key=" +
    process.env.REACT_APP_API_KEY +
    "&language=en-US";
  return axios.get(url);
};

const getSimilarSeries = (seriesId) => {
  const url =
    process.env.REACT_APP_API_URL +
    "tv/71912/similar?api_key=" +
    process.env.REACT_APP_API_KEY +
    "&language=en-US";
  return axios.get(url);
};

const getReccomendationsMovies = (movieId) => {
  const url =
    process.env.REACT_APP_API_URL +
    "movie/580489/recommendations?api_key=" +
    process.env.REACT_APP_API_KEY +
    "&language=en-US";
  return axios.get(url);
};

const getReccomendationsSeries = (seriesId) => {
  const url =
    process.env.REACT_APP_API_URL +
    "tv/71912/recommendations?api_key=" +
    process.env.REACT_APP_API_KEY +
    "&language=en-US";
  return axios.get(url);
};

const getTrailersMovie = (movieId) => {
  const url =
    process.env.REACT_APP_API_URL +
    "movie/580489/videos?api_key=" +
    process.env.REACT_APP_API_KEY +
    "&language=en-US";
  return axios.get(url);
};

const getTrailersSeries = (seriesId) => {
  const url =
    process.env.REACT_APP_API_URL +
    "tv/71912/videos?api_key=" +
    process.env.REACT_APP_API_KEY +
    "&language=en-US";
  return axios.get(url);
};

const VideoDetailService = {
  getMovieDetail,
  getSeriesDetail,
  getMovieExternalId,
  getSeriesExternalId,
  getSimilarMovies,
  getSimilarSeries,
  getReccomendationsMovies,
  getReccomendationsSeries,
  getTrailersMovie,
  getTrailersSeries
};

export default VideoDetailService;
