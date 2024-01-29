import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState([]);
  const getMovieDetail = async () => {
    const data = await axios.get("https://yts.mx/api/v2/movie_details.json", {
      params: {
        movie_id: id,
      },
    });
    setMovieDetail(data);
    console.log(data);
  };
  const { id } = useParams();

  useEffect(() => {
    getMovieDetail();
  }, []);
  return <></>;
};

export default MovieDetail;

// router -> /detail/${id} -> 주소 창에 /detail/:id | :id 부분을 useParams로 가져옴
// -> // 새로 랜더링 되면서 useEffect 안 getMovieDetail 작동
