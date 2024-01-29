import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MovieTemplate from "./components/MovieTemplate";
import MovieDetail from "./components/MovieDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieTemplate />} />
        <Route path="/detail/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
