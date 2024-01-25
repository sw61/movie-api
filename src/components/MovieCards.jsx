import styled from "styled-components";
import PageButton from "./PageButton";
const MovieCards = ({ imgUrl, title, runTime, year, page }) => {
  return (
    <>
      <MovieContainer>
        <ImgBox src={imgUrl}></ImgBox>
        <TextContainer>
          <TextBox>{title}</TextBox>
          <TextBox>{runTime}</TextBox>
          <TextBox>{year}</TextBox>
        </TextContainer>
      </MovieContainer>
    </>
  );
};
export default MovieCards;

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImgBox = styled.img`
  padding: 5px;
  background-color: white;
  width: 210px;
  height: 315px;
  margin-bottom: 5px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  color: white;
`;
const TextBox = styled.div``;
