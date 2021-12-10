import { Card, Button } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useEffect, useRef, useState, useInterval } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getMoviePopular,
  getMovieTop,
  getSeriesPopular,
  getSeriesTop,
  resetVideos,
  setLoading,
  getGenresMovie,
  getGenresTv,
  getMovieByGenre,
  getSeriesByGenre,
  selectGenre,
  resetGenre,
  changeVideoVideoType
} from "../actions/videos";

const Home = () => {
  const listTypeName = { popular: 1, top: 2, category: 3, search: 5 };
  const videoTypeName = { movie: 1, series: 2 };

  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos);
  const [listType, setListType] = useState(listTypeName.popular);
  const [videoType, setVideoType] = useState(videoTypeName.movie);

  const [changeType, setChangeType] = useState(false);
  const [start, setStart] = useState(true);

  const elementRef = useRef(null);

  // useEffect(() => {
  //   dispatch(setLoading());
  //   loadItemList();

  // }, []);

  useEffect(() => {
    console.log("123");

    if (videos.listType == listTypeName.search) return;
    dispatch(setLoading());
    loadItemList();
  }, [listType, videoType, videos.genreSelected, videos.listType]);

  // useEffect(() => {
  //   if (
  //     window.innerHeight > elementRef.current.clientHeight &&
  //     !videos.loading
  //   ) {
  //     console.log("set loading");
  //     dispatch(setLoading());
  //     loadItemList();
  //   }
  // }, [videos]);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1000 >=
        document.documentElement.offsetHeight &&
      !videos.loading &&
      videos.listType != listTypeName.search
    ) {
      dispatch(setLoading());
      loadItemList();
    }
  };

  const resetPage = () => {
    dispatch(resetVideos());
  };

  const changeListType = (type) => {
    if (videos.listType == listTypeName.search) return;

    if (listType != type) {
      resetPage();
      setListType(type);
      dispatch(resetGenre());
      // dispatch(setLoading());
      // loadItemList();
    }
  };

  const changeVideoType = (type) => {
    if (videos.listType == listTypeName.search) {
      setVideoType(type);
      dispatch(changeVideoVideoType(type))
      return;
    }

    if (videoType != type) {
      resetPage();
      setVideoType(type);
      dispatch(resetGenre());
      // dispatch(setLoading());
      // loadItemList();
    }
  };

  const setGenre = (genre) => {
    if (videos.listType == listTypeName.search) return;

    if (
      videos.genreSelected.length == 1 &&
      videos.genreSelected.includes(genre)
    ) {
      setListType(1);
      resetPage();
      dispatch(selectGenre(genre));
    } else {
      resetPage();
      dispatch(selectGenre(genre));
      setListType(3);
    }

    //check if genre size >= 1 else setlisttype(1)
  };

  const loadItemList = () => {
    console.log(videos.genreSelected);
    if (videoType == videoTypeName.movie) {
      dispatch(getGenresMovie());
      if (listType == listTypeName.popular) {
        dispatch(getMoviePopular(videos.page));
        console.log("popular");
      } else if (listType == listTypeName.top) {
        dispatch(getMovieTop(videos.page));
      } else if (listType == listTypeName.category) {
        dispatch(getMovieByGenre(videos.page, videos.genreSelected));
      }
    } else if (videoType == videoTypeName.series) {
      dispatch(getGenresTv());
      if (listType == listTypeName.popular) {
        dispatch(getSeriesPopular(videos.page));
      } else if (listType == listTypeName.top) {
        dispatch(getSeriesTop(videos.page));
      } else if (listType == listTypeName.category) {
        dispatch(getSeriesByGenre(videos.page, videos.genreSelected));
      }
    }
  };

  const loadGenres = () => {
    var elements = [];
    videos.genres.map((item, index) => {
      var selected = false;
      if (videos.genreSelected.includes(item.id)) {
        selected = true;
      }

      elements.push(
        <div
          key={index}
          className={
            "category-item " + (selected ? "category-item-selected" : "")
          }
          onClick={() => {
            setGenre(item.id);
          }}
          index={index}
        >
          {item.name}
        </div>
      );
    });

    return elements;
  };

  const loadItems = () => {
    var elements = [];
    //elements.push(<div>{videos.page}</div>);
    //items.map((item, index) => {
    videos.items.map((item, index) => {
      elements.push(
        <Card key={index} className="card-item item-row">
          <Card.Img
            className="card-image"
            variant="top"
            src={"https://image.tmdb.org/t/p/w185/" + item.poster_path}
            // src="https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY414_CR13.jpg"
          />
          <Card.Body>
            <Card.Title>
              {videoType == videoTypeName.movie ? item.title : item.name}
            </Card.Title>
            <Card.Text>{item.overview.substring(0, 50)}..</Card.Text>
          </Card.Body>
        </Card>
      );
    });

    return elements;
  };

  const loadHeader = () => {
    if (videos.listType != listTypeName.search) {
      return (
        <div className="page-header">
          <div className="category-list">{loadGenres()}</div>
          <br />
          <div className="switch-video-button">
            <div
              className={
                "switch-video-left " +
                (videoType == videoTypeName.movie ? "item-selected-left" : "")
              }
              onClick={() => {
                changeVideoType(videoTypeName.movie);
              }}
            >
              Movies
            </div>
            <div
              className={
                "switch-video-right " +
                (videoType == videoTypeName.series ? "item-selected-right" : "")
              }
              onClick={() => {
                changeVideoType(videoTypeName.series);
              }}
            >
              Series
            </div>
          </div>
          &nbsp;
          <div className="switch-video-button">
            <div
              className={
                "switch-video-left " +
                (listType == listTypeName.popular ||
                listType == listTypeName.category
                  ? "item-selected-left"
                  : "")
              }
              onClick={() => {
                changeListType(listTypeName.popular);
              }}
            >
              Popular
            </div>
            <div
              className={
                "switch-video-right " +
                (listType == listTypeName.top ? "item-selected-right" : "")
              }
              onClick={() => {
                changeListType(listTypeName.top);
              }}
            >
              Top Rated
            </div>
          </div>
          &nbsp;
        </div>
      );
    } else {
      return (
        <div className="page-header page-header-search">
          <br />
          <div className="switch-video-button">
            <div
              className={
                "switch-video-left " +
                (videoType == videoTypeName.movie ? "item-selected-left" : "")
              }
              onClick={() => {
                changeVideoType(videoTypeName.movie);
              }}
            >
              Movies
            </div>
            <div
              className={
                "switch-video-right " +
                (videoType == videoTypeName.series ? "item-selected-right" : "")
              }
              onClick={() => {
                changeVideoType(videoTypeName.series);
              }}
            >
              Series
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      {loadHeader()}
      <div className="page-content-wrapper" ref={elementRef}>
        {loadItems()}
      </div>
    </div>
  );
};

export default Home;
