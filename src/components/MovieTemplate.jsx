import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

import MovieList from "./MovieList";
import PageList from "./PageButton";

const MovieTemplate = () => {
  const [movieList, setMovieList] = useState([]);
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const getMovieList = async () => {
    const data = await axios.get("https://yts.mx/api/v2/list_movies.json", {
      params: {
        limit,
        page,
      },
    });
    console.log(data);
    setMovieList(data.data.data.movies);
    setPage(data.data.data.page_number);
    setLimit(data.data.data.limit);
  };

  const addPage = () => {
    setPage(page + 1);
  };

  const minusPage = () => {
    setPage(page - 1);
  };
  const firstPage = () => {
    setPage(1);
  };
  const maxPage = () => {
    return 58525 / limit + 1;
  };
  const lastpage = () => {
    setPage(maxPage);
  };

  useEffect(() => {
    getMovieList();
  }, [page, limit]);

  return (
    <>
      <MainContainer>
        <MovieList key={movieList.id} movieList={movieList} />
        <button onClick={firstPage}>first</button>
        <button onClick={minusPage}>-</button>
        <PageNum>{page}</PageNum>
        <button onClick={addPage}>+</button>
        <button onClick={lastpage}>last</button>
      </MainContainer>
    </>
  );
};
export default MovieTemplate;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 320px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 40px;
  background-color: black;
`;
const PageNum = styled.div`
  color: white;
`;
// 영화 목록 화면에 띄우기
// 첫 페이지 이동, 끝 페이지 이동 기능
// 지금 있는 페이지에서 -1, +1 이동 기능
// 드롭다운 ( 한 페이지에 출력할 영화 개수 선택 )
