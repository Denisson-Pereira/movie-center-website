import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const MovieImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const MovieTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

export const MovieDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
`;
