import styled from "styled-components";

export const Container = styled.div`
  padding: 1vw 5vw;
  text-align: start;
  
  .movie-list {
    display: flex;
    justify-content: space-between;  
    gap: 2vw;  
    margin-top: 20px;
    width: 100%;  
  }

  .text {
    font-size: 30px;
  }
`;

export const MovieCard = styled.div`
  position: relative;
  width: 25%;  
  height: 30vw;  
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MovieInfo = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
  width: calc(100% - 20px);
`;

export const Title = styled.h3`
  font-size: 1.5vw;
  margin: 0;
`;

export const ReleaseDate = styled.p`
  font-size: 1vw;
  margin: 5px 0 0;
`;
