import styled from "styled-components";

export const Container = styled.div<{ $backgroundImage: string }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => (props.$backgroundImage ? `https://image.tmdb.org/t/p/original${props.$backgroundImage}` : "")});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-image 0.3s ease-in-out;
  position: relative;
`;

export const Filmes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  position: absolute;
  bottom: 0; 
  padding-bottom: 20px;
`;

export const MovieCard = styled.div`
  position: relative;
  margin: 0 10px;
  transition: transform 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.2); 
  }
`;

export const MovieImage = styled.img`
  width: 10vw;
  height: 15vw;
  object-fit: cover;
  transition: transform 0.3s ease;
  border-radius: 5px;
`;

export const MovieList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 20vw;
  overflow-x: hidden;  
  padding: 20px 0;
  gap: 10px;
`;
