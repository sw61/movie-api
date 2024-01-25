import MovieCards from "./MovieCards";

const MovieList = ({ movieList }) => {
  return (
    <>
      {movieList.map((movieList) => (
        <MovieCards
          imgUrl={movieList.large_cover_image}
          title={movieList.title}
          runTime={movieList.runtime}
          year={movieList.year}
        />
      ))}
    </>
  );
};
export default MovieList;
