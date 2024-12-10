import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  font-family: 'Arial', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(150%);
  z-index: 0;
`;

export const MovieContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 900px;
  padding: 40px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.8);
  text-align: left;
  z-index: 1;
  color: white;
  width: 90%;
  backdrop-filter: blur(8px);
  flex-direction: row;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const MovieImage = styled.img`
  width: 180px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
  margin-right: 30px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 150px;
    margin-bottom: 20px;
  }
`;

export const MovieTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: #f1f1f1;
  margin-bottom: 15px;
  text-transform: capitalize;
  letter-spacing: 1px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const MovieDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #ddd;
  margin-bottom: 25px;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 100%;
  }
`;

export const BackButton = styled.button`
  background-color: #ff5a5f;
  color: white;
  font-size: 1.2rem;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  
  &:hover {
    background-color: #ff2a2f;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(2px);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
    font-size: 1.1rem;
  }
`;
