import styled, { StyleSheetManager } from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/themeContext';

interface ToggleProps {
  isDarkMode: boolean;
}

const Container = styled.div`

`;

const ToggleButton = styled.div<ToggleProps>`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.isDarkMode ? 'flex-end' : 'flex-start')};
  width: 55px;
  height: 20px;
  background-color: ${props => (props.isDarkMode ? '#555' : '#ddd')};
  border-radius: 30px;
  padding: 5px;
  cursor: pointer;
  transition: background-color 0.3s, justify-content 0.3s;
`;

const ToggleCircle = styled.div<ToggleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: ${props => (props.isDarkMode ? '#333' : '#fff')};
  border-radius: 50%;
  transition: background-color 0.3s;
`;

export const BotaoTrocarTema = () => {
  const { toggleTheme, themeScheme } = useTheme();
  const isDarkMode = themeScheme === 'dark';

  return (
    <StyleSheetManager shouldForwardProp={(prop) => !prop.startsWith("isDarkMode")}>
      <Container data-testid="container-dark-mode">
        <ToggleButton isDarkMode={isDarkMode} onClick={toggleTheme}>
          <ToggleCircle isDarkMode={isDarkMode}>
            {isDarkMode ? <FaMoon color="#bbd6d8" /> : <FaSun color="#a58f14" />}
          </ToggleCircle>
        </ToggleButton>
      </Container>
    </StyleSheetManager>
  );
};

