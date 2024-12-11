import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ThemeProvider } from "../../../context/themeContext";
import { BrowserRouter } from "react-router";
import { SignUp } from ".";

describe('SignUp Component', () => {
    it('should show error message if user clicks submit without agreeing to terms', () => {
        render(
            <ThemeProvider>
                <BrowserRouter>
                    <SignUp />
                </BrowserRouter>
            </ThemeProvider>
        );

        fireEvent.change(screen.getByPlaceholderText("Digite seu email"), {
            target: { value: "test@example.com" },
        });
        fireEvent.change(screen.getByPlaceholderText("Digite sua senha"), {
            target: { value: "password123" },
        });
        fireEvent.change(screen.getByPlaceholderText("Confirme sua senha"), {
            target: { value: "password123" },
        })

        const button = screen.getByRole('button', { name: /Cadastrar/ });
        fireEvent.click(button);

        const errorMessage = screen.getByText(/Você precisa concordar com os termos de uso./);
        expect(errorMessage).toBeInTheDocument();        
    })
});