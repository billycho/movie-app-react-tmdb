import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <Container fluid className="wrapper p-0">
      <Header />
      <div className="page-content-wrapper">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </Container>
  );
}

export default App;
