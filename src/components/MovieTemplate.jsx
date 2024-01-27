import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

import MovieList from "./MovieList";
import LimitMenu from "./LimitMenu";

const MovieTemplate = () => {
  const [movieList, setMovieList] = useState([]);
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState();
  const [limitNum, setLimitNum] = useState([
    {
      id: 1,
      limit: "10",
    },
    { id: 2, limit: "20" },
    { id: 3, limit: "30" },
    { id: 3, limit: "40" },
    { id: 3, limit: "50" },
  ]);

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
    setLastPage(data.data.data.movie_count);
  };

  const maxPage = Math.floor(lastPage / limit + 1);

  useEffect(() => {
    getMovieList();
  }, [page, limit]);

  return (
    <>
      <LimitMenu setLimit={setLimit} setPage={setPage} limitNum={limitNum} />
      <MainContainer>
        <MovieList key={movieList.id} movieList={movieList} />
      </MainContainer>
      <PageContainer>
        <MdOutlineKeyboardDoubleArrowLeft
          className="firstBtn"
          onClick={() => setPage(1)}
        />
        <MdOutlineKeyboardArrowLeft
          className="minusBtn"
          onClick={() => setPage(page > 1 ? page - 1 : 1)}
        />

        <PageNum>{page}</PageNum>
        <MdOutlineKeyboardArrowRight
          className="plusBtn"
          onClick={() => setPage(page < maxPage ? page + 1 : page)}
        />

        <MdOutlineKeyboardDoubleArrowRight
          className="lastBtn"
          onClick={() => setPage(maxPage)}
        />
      </PageContainer>
    </>
  );
};
export default MovieTemplate;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 300px;
  padding-top: 50px;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 40px;
  background-color: black;
`;
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 320px;
  margin: 0 auto;
  background-color: black;
  gap: 50px;

  .firstBtn,
  .minusBtn,
  .plusBtn,
  .lastBtn {
    color: white;
    cursor: pointer;
    font-size: 35px;
  }
`;
const PageNum = styled.div`
  color: white;
  font-size: 25px;
  font-weight: bold;
`;

// 영화 목록 화면에 띄우기
// 첫 페이지 이동, 끝 페이지 이동 기능
// 지금 있는 페이지에서 -1, +1 이동 기능
// 드롭다운 ( 한 페이지에 출력할 영화 개수 선택 )
