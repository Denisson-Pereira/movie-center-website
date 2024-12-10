import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.theme.images.bg_login});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
`;

export const FormContainer = styled.form`
  width: 90vw;
  max-width: 400px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const GlassEffect = styled.div`
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 2.5em;
  color: #fff;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
`;

export const InputField = styled.input`
  width: 90%;
  margin: 10px 0;
  padding: 15px;
  font-size: 1em;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.2);
  color: ${props => props.theme.colors.primary};
  transition: all 0.3s ease;

  &::placeholder {
    color: ${props => props.theme.colors.primary};
  }

  &:focus {
    border-color: ${props => props.theme.colors.red};
    outline: none;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  font-size: 1.2em;
  border-radius: 10px;
  border: none;
  background-color: ${props => props.theme.colors.red};
  color: #fff;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.redStrong};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ErrorMessage = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: 1em;
  margin-top: 10px;
  text-align: center;
`;

export const NoAccountLink = styled.p`
  font-size: 1em;
  color: #fff;
  text-align: center;
  margin-top: 15px;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #007bff;
  }
`;

export const TermsCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 0.9em;
  color: #fff;

  input {
    margin-right: 10px;
  }

  label {
    cursor: pointer;
  }
`;