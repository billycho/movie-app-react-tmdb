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
  GET_TRAILERS_SERIES
} from "../actions/type";

const initialState = {
  details: {},
  externalIds: {},
  reccomendations: [],
  similarItems: [],
  trailers: [],
  loading: false,
};

function videoReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MOVIE_DETAIL:
    case GET_SERIES_DETAIL:
      return state;
    case GET_MOVIE_EXTERNALID:
    case GET_SERIES_EXTERNALID:
      return state;
    case GET_SIMILAR_MOVIE:
    case GET_SIMILAR_SERIES:
      return state;
    case GET_RECCOMENDATIONS_MOVIE:
    case GET_RECCOMENDATIONS_SERIES:
      return state;
    case GET_TRAILERS_MOVIE:
    case GET_TRAILERS_SERIES:
      return state;
    default:
      return state;
  }
}

export default videoReducer;
