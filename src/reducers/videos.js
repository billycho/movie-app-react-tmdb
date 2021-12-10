import {
  GET_MOVIE_POPULAR,
  GET_SERIES_POPULAR,
  GET_MOVIE_TOP,
  GET_SERIES_TOP,
  RESET_VIDEOS,
  SET_LOADING,
  GET_GENRES_TV,
  GET_GENRES_MOVIE,
  GET_MOVIE_BY_GENRE,
  GET_SERIES_BY_GENRE,
  SELECT_GENRE,
  RESET_GENRE,
  SEARCH_VIDEOS,
  CHANGE_LISTTYPE,
  CHANGE_VIDEOTYPE
} from "../actions/type";

const initialState = {
  items: [],
  page: 1,
  loading: false,
  listType: 1,
  videoType: 1,
  genres: [],
  genreSelected: [],
};

function videoReducer(state = initialState, action) {
  const { type, payload } = action;

  if (type == GET_MOVIE_POPULAR) {
    console.log(payload);
    console.log(state.genreSelected);
  }

  console.log(type);
  switch (type) {
    case GET_MOVIE_POPULAR:
    case GET_MOVIE_TOP:
    case GET_SERIES_POPULAR:
    case GET_SERIES_TOP:
      return {
        ...state,
        items: [...state.items, ...payload],
        page: state.page + 1,
        loading: false,
      };
    case RESET_VIDEOS:
      return {
        ...state,
        items: [],
        page: 1,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_GENRES_MOVIE:
    case GET_GENRES_TV:
      return {
        ...state,
        genres: payload.genres,
      };
    case SELECT_GENRE:
      var index = state.genreSelected.indexOf(payload);

      if (index !== -1) {
        var newGenreSelected = state.genreSelected.filter(function (item) {
          return item != payload;
        });
        return {
          ...state,
          genreSelected: newGenreSelected,
        };
      } else {
        return {
          ...state,
          genreSelected: [...state.genreSelected, payload],
        };
      }
    case RESET_GENRE:
      return {
        ...state,
        genreSelected: [],
      };
    case SEARCH_VIDEOS:
      return {
        ...state,
        items: [...state.items, ...payload],
        page: state.page + 1,
        listType: 5,
        loading: false,
      };
    case GET_MOVIE_BY_GENRE:
    case GET_SERIES_BY_GENRE:
      return {
        ...state,
        items: [...state.items, ...payload],
        page: state.page + 1,
        loading: false,
      };
    case CHANGE_LISTTYPE:
      return {
        ...state,
        listType: payload,
      };
    case CHANGE_VIDEOTYPE:
      return {
        ...state,
        videoType: payload,
      };
    default:
      return state;
  }
}

export default videoReducer;
