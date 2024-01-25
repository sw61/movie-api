import MovieCards from "./MovieCards";

const MovieList = ({ movieList }) => {
  return (
    <>
      {movieList.map((movieList) => (
        <MovieCards
          imgUrl={movieList.background_image}
          title={movieList.title}
          runTime={movieList.runtime}
          year={movieList.year}
        />
      ))}
    </>
  );
};
export default MovieList;