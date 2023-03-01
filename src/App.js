import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.sass';
import {Navbar, ArchivedVideos, NewVideos} from "./components";
import {Home} from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />}>
                  <Route path="new" element={<NewVideos />} />
                  <Route path="videos" element={<ArchivedVideos />} />
              </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
