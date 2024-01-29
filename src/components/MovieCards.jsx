import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MovieCards = ({
  id,
  imgUrl,
  title,
  runTime,
  year,
  rate,
  genre,
  detail,
}) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const moveDetailPage = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <MovieContainer onClick={moveDetailPage} className="movie">
        <ImgBox
          onMouseUp={() => setHover(true)}
          onMouseDown={() => setHover(false)}
          src={imgUrl}
        ></ImgBox>
        <TextContainer>
          <TextBox>Title - {title}</TextBox>
          <TextBox>RunTime - {runTime}m</TextBox>
          <TextBox>Release Year - {year}</TextBox>
        </TextContainer>
      </MovieContainer>
      <HoverContainer className="hover" href={detail}>
        <RateText>{rate}</RateText>
        <GenreText>{genre}</GenreText>
        <DetailBtn>view detail</DetailBtn>
      </HoverContainer>
    </>
  );
};
export default MovieCards;

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e1e1e1;
  &:hover {
    .hover {
      display: block;
    }
  }
`;
const ImgBox = styled.img`
  padding: 10px;
  background-color: white;
  width: 210px;
  height: 315px;
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 220px;
  height: 80px;
  padding-left: 10px;
  color: white;
`;
const TextBox = styled.div``;

const HoverContainer = styled.div`
  display: none;
`;
const RateText = styled.div`
  color: white;
`;
const GenreText = styled.div`
  color: white;
`;
const DetailBtn = styled.button``;
