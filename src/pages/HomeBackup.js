import { Card, Button } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useEffect, useRef, useState, useInterval } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getMoviePopular } from "../actions/videos";

const Home = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(50);
  const [isBottom, setIsBottom] = useState(false);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [listType, setListType] = useState(1);
  const [videoType, setVideoType] = useState(1);

  const videos = useSelector((state) => state.videos);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLimit(limit + 1);
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [limit]);

  // useEffect(() => {
  //   console.log(items);
  // }, [items]);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // function handleScroll() {
  //   const scrollTop =
  //     (document.documentElement && document.documentElement.scrollTop) ||
  //     document.body.scrollTop;
  //   const scrollHeight =
  //     (document.documentElement && document.documentElement.scrollHeight) ||
  //     document.body.scrollHeight;
  //   if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
  //     setIsBottom(true);
  //   }
  // }

  // useEffect(() => {
  //   if (isBottom) {
  //     setLimit(limit + 20);
  //     console.log("123");
  //     setIsBottom(false);
  //   }
  // }, [isBottom]);

  const listTypeName = { popular: 1, top: 2 };
  const videoTypeName = { movie: 1, series: 2 };

  useEffect(() => {
    //loadPopular();
    dispatch(getMoviePopular(1));
  }, []);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1000 >=
      document.documentElement.offsetHeight
    ) {
      loadItemList();
    }
  };

  const changeListType = (type) => {
    if (listType != type) {
      setItems([]);
      setPage(1);
      setListType(type);
    }
  };

  const changeVideoType = (type) => {
    if (videoType != type) {
      setItems([]);
      setPage(1);
      setVideoType(type);
    }
  };

  const loadItemList = () => {
    if (videoType == videoTypeName.movie) {
      if (listType == listTypeName.popular) {
        dispatch(getMoviePopular(page));
      } else if (listType == listTypeName.top) {
        loadTop();
      }
    } else if (videoType == videoTypeName.movie) {
      if (listType == listTypeName.popular) {
        loadPopularSeries();
      } else if (listType == listTypeName.top) {
        loadTopSeries();
      }
    }
  };

  const loadPopularSeries = () => {
    const url =
      "https://api.themoviedb.org/3/tv/popular?api_key=9f53941e2927980a071f8ba7fba3cf5e&language=en-US&page=" +
      page;
    axios.get(url).then((res) => {
      console.log(res.data.results);
      setItems([...items, ...res.data.results]);
      setPage(page + 1);
    });
  };

  const loadTopSeries = () => {
    const url =
      "https://api.themoviedb.org/3/tv/top_rated?api_key=9f53941e2927980a071f8ba7fba3cf5e&language=en-US&page=" +
      page;

    axios.get(url).then((res) => {
      console.log("top rated");
      console.log(res.data.results);
      setItems([...items, ...res.data.results]);
      setPage(page + 1);
    });
  };

  const loadPopular = () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=9f53941e2927980a071f8ba7fba3cf5e&language=en-US&page=" +
      page;
    axios.get(url).then((res) => {
      console.log(res.data.results);
      setItems([...items, ...res.data.results]);
      setPage(page + 1);
    });
  };

  const loadTop = () => {
    const url =
      "https://api.themoviedb.org/3/movie/top_rated?api_key=9f53941e2927980a071f8ba7fba3cf5e&language=en-US&page=" +
      page;

    axios.get(url).then((res) => {
      console.log("top rated");
      console.log(res.data.results);
      setItems([...items, ...res.data.results]);
      setPage(page + 1);
    });
  };

  useEffect(() => {
    loadItemList();
  }, [listType, videoType]);

  const loadItems = () => {
    var elements = [];

    //items.map((item, index) => {
    videos.map((item, index) => {
      elements.push(
        <Card key={index} className="card-item item-row">
          {/* <Card.Img
            className="card-image"
            variant="top"
            src={"https://image.tmdb.org/t/p/w185/" + item.poster_path}
            // src="https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY414_CR13.jpg"
          /> */}
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.overview.substring(0, 50)}..</Card.Text>
          </Card.Body>
        </Card>
      );
    });

    return elements;
  };

  return (
    <div>
      <div className="page-header">
        <Button
          variant="secondary"
          onClick={() => {
            changeVideoType(videoTypeName.movie);
          }}
        >
          Movies
        </Button>
        &nbsp;
        <Button
          variant="secondary"
          onClick={() => {
            changeVideoType(videoTypeName.series);
          }}
        >
          Series
        </Button>
        &nbsp;
        <Button
          variant="secondary"
          onClick={() => {
            changeListType(listTypeName.popular);
          }}
        >
          Popular
        </Button>
        &nbsp;
        <Button
          variant="secondary"
          onClick={() => {
            changeListType(listTypeName.top);
          }}
        >
          Top
        </Button>
      </div>
      <div className="page-content-wrapper">{loadItems()}</div>
    </div>
  );
};

export default Home;
