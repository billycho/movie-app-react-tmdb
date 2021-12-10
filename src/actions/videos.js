import {
  GET_GENRES_MOVIE,
  GET_GENRES_TV,
  GET_MOVIE_POPULAR,
  GET_MOVIE_TOP,
  GET_SERIES_POPULAR,
  GET_SERIES_TOP,
  GET_MOVIE_BY_GENRE,
  GET_SERIES_BY_GENRE,
  RESET_VIDEOS,
  SET_LOADING,
  SELECT_GENRE,
  RESET_GENRE,
  SEARCH_VIDEOS,
  CHANGE_LISTTYPE,
  CHANGE_VIDEOTYPE
} from "./type";
import VideoService from "../services/VideoService";

export const getMoviePopular = (page) => async (dispatch) => {
  try {
    const res = await VideoService.getMoviePopular(page);
    dispatch({
      type: GET_MOVIE_POPULAR,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSeriesPopular = (page) => async (dispatch) => {
  try {
    const res = await VideoService.getSeriesPopular(page);
    dispatch({
      type: GET_SERIES_POPULAR,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getMovieTop = (page) => async (dispatch) => {
  try {
    const res = await VideoService.getMovieTop(page);
    dispatch({
      type: GET_MOVIE_TOP,
      payload: res.data.results,
    });

  } catch (err) {
    console.log(err);
  }
};

export const getSeriesTop = (page) => async (dispatch) => {
  try {
    const res = await VideoService.getSeriesTop(page);
    dispatch({
      type: GET_SERIES_TOP,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const resetVideos = () => (dispatch) => {
  dispatch({
    type: RESET_VIDEOS,
    payload: "",
  });
  
};

export const setLoading = () => async (dispatch) =>  {
  dispatch({
    type: SET_LOADING,
    payload: "",
  });
}

export const selectGenre = (genre) => (dispatch) =>  {
  dispatch({
    type: SELECT_GENRE,
    payload: genre,
  });
}

export const resetGenre = () => (dispatch) => {
  dispatch({
    type: RESET_GENRE,
    payload: "",
  });
}

export const getGenresMovie = () => async (dispatch) => {
  try {
    const res = await VideoService.getGenresMovie();
    dispatch({
      type: GET_GENRES_MOVIE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getGenresTv = () => async (dispatch) => {
  try {
    const res = await VideoService.getGenresTv();
    dispatch({
      type: GET_GENRES_TV,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getMovieByGenre = (page, genre) => async (dispatch) => {
  try {
    const res = await VideoService.getMovieByGenre(page, genre);
    dispatch({
      type: GET_MOVIE_BY_GENRE,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSeriesByGenre = (page, genre) => async (dispatch) => {
  try {
    const res = await VideoService.getSeriesByGenre(page, genre);
    dispatch({
      type: GET_SERIES_BY_GENRE,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const searchVideos = (page, keyword, type) => async (dispatch) => {
  try {
    const res = await VideoService.searchVideos(page,keyword, type);
    dispatch({
      type: SEARCH_VIDEOS,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const changeVideoListType = (listType) => (dispatch) => {
  dispatch({
    type: CHANGE_LISTTYPE,
    payload: listType,
  });
}

export const changeVideoVideoType = (videoType) => (dispatch) => {
  dispatch({
    type: CHANGE_VIDEOTYPE,
    payload: videoType,
  });
}