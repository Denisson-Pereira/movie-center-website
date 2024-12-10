import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5vh;
  margin: 1vw;
`;

export const Image = styled.div`

`;

export const Icon = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: 2vw;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
