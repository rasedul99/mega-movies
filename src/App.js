import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:imdbID" element={<MovieDetail />}></Route>
        <Route path="#" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
