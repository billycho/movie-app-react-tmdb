import { Navbar, Row, Col, Form, Button } from "react-bootstrap";
import { useEffect, useRef, useState, useInterval } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  searchVideos,
  changeVideoListType,
  resetVideos,
} from "../actions/videos";

const Header = () => {
  
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos);

  const [searchTerm, setSearchTerm] = useState("");
  const [didMount, setDidMount] = useState(false);
  const listTypeName = { popular: 1, top: 2, category: 3, search: 5 };

  useEffect(() => {
    setDidMount(true);
  }, []);

  useEffect(() => {
    if (didMount) {
      const delayDebounceFn = setTimeout(() => {
        if (searchTerm != "") {
          dispatch(resetVideos());
          dispatch(searchVideos(videos.page, searchTerm, videos.videoType));
        } else {
          if (videos.listType == listTypeName.search) {
            dispatch(resetVideos());
            dispatch(changeVideoListType(listTypeName.popular));
          }
        }
      }, 2000);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [searchTerm]);

  useEffect(() => {
    dispatch(resetVideos());
    dispatch(searchVideos(videos.page, searchTerm, videos.videoType));
  }, [videos.videoType])

  // const handleInputChange = (e) => {
  //   //alert(e.target.value);
  //   let keyword = e.target.value;
  //   if (keyword != "") {
  //     dispatch(resetVideos());
  //     dispatch(searchVideos(videos.page, keyword));
  //   } else {
  //     dispatch(resetVideos());
  //     dispatch(changeListType(1));
  //   }
  // };

  return (
    <div>
      <Navbar className="nav-header shadow-sm">
        <Row className="m-0 nav-header-row">
          <Col className="navbar-left" lg="4">
            BestWatch
          </Col>
          <Col className="navbar-search" lg="4">
            <input
              className="search-input"
              placeholder="Search Movie/TV.."
              type="text"
              //onChange={handleInputChange}
              onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
          </Col>
        </Row>
      </Navbar>
    </div>
  );
};

export default Header;
