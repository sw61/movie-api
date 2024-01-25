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
  const [limitNum, setLimitNum] = useState([
    {
      id: 1,
      limit: "Page per 10",
    },
    { id: 2, limit: "Page per 20" },
    { id: 3, limit: "Page per 30" },
    { id: 3, limit: "Page per 40" },
    { id: 3, limit: "Page per 50" },
  ]);

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

  const maxPage = () => {
    return Math.floor(58525 / limit + 1);
  };

  useEffect(() => {
    getMovieList();
  }, [page, limit]);

  return (
    <>
      <LimitMenu setLimit={setLimit} limitNum={limitNum} />
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
          onClick={() => setPage(page + 1)}
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
  padding: 0 320px;
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
