import {
  GET_MOVIE_DETAIL,
  GET_SERIES_DETAIL,
  GET_MOVIE_EXTERNALID,
  GET_SERIES_EXTERNALID,
  GET_SIMILAR_MOVIE,
  GET_SIMILAR_SERIES,
  GET_RECCOMENDATIONS_MOVIE,
  GET_RECCOMENDATIONS_SERIES,
  GET_TRAILERS_MOVIE,
  GET_TRAILERS_SERIES,
} from "./type";
import VideoDetailService from "../services/VideoDetailService";

export const getMovieDetail = (movieId) => async (dispatch) => {
  try {
    const res = await VideoDetailService.getMovieDetail(movieId);
    dispatch({
      type: GET_MOVIE_DETAIL,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSeriesDetail = (seriesId) => async (dispatch) => {
  try {
    const res = await VideoDetailService.getSeriesDetail(seriesId);
    dispatch({
      type: GET_SERIES_DETAIL,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getMovieExternalId = (movieId) => async (dispatch) => {
  try {
    const res = await VideoDetailService.getMovieExternalId(movieId);
    dispatch({
      type: GET_MOVIE_EXTERNALID,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSeriesExternalId = (seriesId) => async (dispatch) => {
  try {
    const res = await VideoDetailService.getSeriesExternalId(seriesId);
    dispatch({
      type: GET_SERIES_EXTERNALID,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSimilarMovies = (movieId) => async (dispatch) => {
  try {
    const res = await VideoDetailService.getSimilarMovies(movieId);
    dispatch({
      type: GET_SIMILAR_MOVIE,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSimilarSeries = (seriesId) => async (dispatch) => {
  try {
    const res = await VideoDetailService.getSimilarSeries(seriesId);
    dispatch({
      type: GET_SIMILAR_SERIES,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getReccomendationsMovies = (movieId) => async (dispatch) => {
  try {
    const res = await VideoDetailService.getReccomendationsMovies(movieId);
    dispatch({
      type: GET_RECCOMENDATIONS_MOVIE,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getReccomendationsSeries = (seriesId) => async (dispatch) => {
  try {
    const res = await VideoDetailService.getReccomendationsSeries(seriesId);
    dispatch({
      type: GET_RECCOMENDATIONS_SERIES,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getTrailersMovie = (movieId) => async (dispatch) => {
  try {
    const res = await VideoDetailService.getTrailersMovie(movieId);
    dispatch({
      type: GET_TRAILERS_MOVIE,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getTrailersSeries = (seriesId) => async (dispatch) => {
  try {
    const res = await VideoDetailService.getTrailersSeries(seriesId);
    dispatch({
      type: GET_TRAILERS_SERIES,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};
