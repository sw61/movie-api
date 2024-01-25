import "./App.css";
import styled from "styled-components";
import MovieTemplate from "./components/MovieTemplate";

function App() {
  return (
    <BlackGround>
      <MovieTemplate />
    </BlackGround>
  );
}

export default App;

const BlackGround = styled.div`
  background-color: black;
  height: 100vh;
`;
