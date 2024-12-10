import { useEffect, useState, useRef } from "react";
import { NavBar } from "../../../components/navBar";
import { Container, Filmes, MovieCard, MovieImage, MovieList } from "./styles";
import { IMovies } from "../../../model/IMovies";
import { getMoviesNowPlaying } from "../../../services/getMoviesNowPlaying";

export const Home = () => {
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const movieListRef = useRef<HTMLDivElement>(null);  
  const lastMouseXRef = useRef(0); 

  useEffect(() => {
    async function fetchData() {
      const response = await getMoviesNowPlaying();
      setMovies(response.slice(1, 15));
      setBackgroundImage(response[0].backdrop_path);
    }
    fetchData();
  }, []);

  const handleMouseEnter = (movie: IMovies) => {
    setBackgroundImage(movie.backdrop_path);
  };

  const handleMouseLeave = () => {
    setBackgroundImage(movies[0]?.backdrop_path || "");
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!movieListRef.current) return;

    const movementX = e.movementX; 
    const scrollSpeed = 2; 
    if (Math.abs(movementX) > 5) {
      movieListRef.current.scrollLeft += movementX * scrollSpeed;
    }

    lastMouseXRef.current = e.clientX; 
  };

  return (
    <Container $backgroundImage={backgroundImage}>
      <NavBar />
      <Filmes>
        <MovieList
          ref={movieListRef}
          onMouseMove={handleMouseMove}  // Detecta o movimento do mouse
          onMouseEnter={() => (movieListRef.current!.style.cursor = "grab")}
          onMouseLeave={() => (movieListRef.current!.style.cursor = "default")}
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              onMouseEnter={() => handleMouseEnter(movie)}
              onMouseLeave={handleMouseLeave}
            >
              <MovieImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </MovieCard>
          ))}
        </MovieList>
      </Filmes>
    </Container>
  );
};