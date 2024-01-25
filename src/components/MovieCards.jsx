import styled from "styled-components";

const MovieCards = ({ imgUrl, title, runTime, year }) => {
  return (
    <>
      <MovieContainer>
        <ImgBox src={imgUrl}></ImgBox>
        <TextContainer>
          <TextBox>Title - {title}</TextBox>
          <TextBox>RunTime - {runTime}m</TextBox>
          <TextBox>Release Year - {year}</TextBox>
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
  overflow: hidden;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  color: white;
`;
const TextBox = styled.div``;
