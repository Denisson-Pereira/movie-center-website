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
  background-color: #222;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(30%);
  z-index: -1;
`;

export const ProfileCard = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  z-index: 1;
  width: 80%;
  max-width: 600px;
  text-align: center;
  color: white;
`;

export const ProfileContent = styled.div`
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.2rem;
    color: #ddd;
    margin-bottom: 30px;
  }
`;

export const Button = styled.button`
  background-color: #ff5a5f;
  color: white;
  font-size: 1.2rem;
  padding: 12px 25px;
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
`;