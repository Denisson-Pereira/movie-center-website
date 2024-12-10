import { useEffect, useState } from "react";
import { IMovies } from "../../model/IMovies";
import { getRecommendedMovies } from "../../services/getMovieRecommendations";
import { Container, MovieCard, MovieImage, MovieInfo, Title, ReleaseDate } from "./styles";
import useHandlePage from "../../hooks/useHandlePage";

export const Currently = () => {
  const [movies, setMovies] = useState<IMovies[]>([]);
  const handlePage = useHandlePage();

  useEffect(() => {
    async function fetchData() {
      const response = await getRecommendedMovies();
      setMovies(response.slice(9, 13));
    }
    fetchData();
  }, []);
  
  return (
    <Container>
      <p className="text">Currently playing</p>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id}                 onClick={() => handlePage(movie.id)}>
            <MovieImage
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <MovieInfo>
              <Title>{movie.title}</Title>
              <ReleaseDate>{new Date(movie.release_date).toLocaleDateString()}</ReleaseDate>
            </MovieInfo>
          </MovieCard>
        ))}
      </div>
    </Container>
  );
};

