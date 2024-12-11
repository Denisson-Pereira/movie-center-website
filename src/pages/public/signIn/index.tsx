import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  LoginContainer,
  SignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
  ErrorMessage,
  Title,
  GlassEffect,
  NoAccountLink,
  TermsCheckbox,
} from "./styles";
import { auth } from "../../../../firebaseConfig";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isChecked) {
      setError("Você precisa concordar com os termos de uso.");
      return;
    }
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <SignInContainer>
      <LoginContainer>
        <FormContainer onSubmit={handleLogin}>
          <GlassEffect>
            <Title>Entrar</Title>
            <InputField
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              id="password"
              type="password"
              name="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <TermsCheckbox>
              <input
                id="check"
                name="check"
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <p>Eu concordo com os termos de uso.</p>
            </TermsCheckbox>
            <SubmitButton type="submit">Entrar</SubmitButton>
            <NoAccountLink onClick={() => navigate("/signup")}>
              Não tem conta? Clique aqui
            </NoAccountLink>
          </GlassEffect>
        </FormContainer>
      </LoginContainer>
    </SignInContainer>
  );
};