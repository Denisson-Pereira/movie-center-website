import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SignUpContainer,
  FormContainer,
  InputField,
  SubmitButton,
  ErrorMessage,
  Title,
  GlassEffect,
  NoAccountLink,
  TermsCheckbox,
} from "./styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebaseConfig";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false); 
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    if (password !== confirmPassword) {
      setError("A senha e a confirmação de senha devem ser iguais.");
      return;
    }

    if (!isChecked) {
      setError("Você precisa concordar com os termos de uso.");
      return;
    }

    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <SignUpContainer>
      <FormContainer onSubmit={handleSignUp}>
        <GlassEffect>
          <Title>Criar Conta</Title>
          <InputField
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            name="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputField
            name="confirmPassword"
            type="password"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <TermsCheckbox>
              <input
                name="check"
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <p>Eu concordo com os termos de uso.</p>
            </TermsCheckbox>
          <SubmitButton type="submit">Cadastrar</SubmitButton>
          <NoAccountLink onClick={() => navigate("/")}>
            Já tem uma conta? Clique aqui para entrar
          </NoAccountLink>
        </GlassEffect>
      </FormContainer>
    </SignUpContainer>
  );
};
