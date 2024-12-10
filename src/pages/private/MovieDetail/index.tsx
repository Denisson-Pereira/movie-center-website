import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, MovieImage, MovieContent, MovieTitle, MovieDescription, BackgroundImage, BackButton } from "./styles";
import { IMovies } from "../../../model/IMovies";
import { getMovieById } from "../../../services/getMovieById";

export const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<IMovies>();
  const navigate = useNavigate();

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

  const handleBackClick = () => {
    navigate("/"); // Redireciona para a página inicial
  };

  return (
    <Container>
      <BackgroundImage
        src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
        alt={movieDetails.title}
      />
      <MovieContent>
        <MovieImage
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
        <div>
          <MovieTitle>{movieDetails.title}</MovieTitle>
          <MovieDescription>{movieDetails.overview}</MovieDescription>
          <BackButton onClick={handleBackClick}>Voltar</BackButton>
        </div>
      </MovieContent>
    </Container>
  );
};
