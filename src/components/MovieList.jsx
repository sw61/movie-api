import MovieCards from "./MovieCards";

const MovieList = ({ movieList }) => {
  return (
    <>
      {movieList.map((movieList) => (
        <MovieCards
          id={movieList.id}
          imgUrl={movieList.medium_cover_image}
          title={movieList.title}
          runTime={movieList.runtime}
          year={movieList.year}
          rate={movieList.rating}
          genre={movieList.genres}
          detail={movieList.url}
        />
      ))}
    </>
  );
};
export default MovieList;
