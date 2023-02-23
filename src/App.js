import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.sass';
import {Navbar, VideosPart} from "./components";
import {Home} from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />}>
                  <Route path="videos" element={<VideosPart />} />
              </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
