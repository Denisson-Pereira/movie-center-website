import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  // Para pegar o parâmetro da URL
import { Container, MovieDescription, MovieImage, MovieTitle } from "./styles";
import { IMovies } from "../../../model/IMovies";
import { getMovieById } from "../../../services/getMovieById";


export const MovieDetail = () => {
  const { id } = useParams(); 
  const [movieDetails, setMovieDetails] = useState<IMovies>();

  useEffect(() => {
    async function fetchDetails() {
      if (id) {
        const details = await getMovieById(parseInt(id)); 
        if (details === null) return;
        setMovieDetails(details);
      }
    }
    fetchDetails();
  }, [id]);

  if (!movieDetails) return <p>Loading...</p>;

  return (
    <Container>
      <MovieImage
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <MovieTitle>{movieDetails.title}</MovieTitle>
      <MovieDescription>{movieDetails.overview}</MovieDescription>
    </Container>
  );
};
