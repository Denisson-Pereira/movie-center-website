import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ThemeProvider } from "../../../context/themeContext";
import { BrowserRouter } from "react-router";
import { SignUp } from ".";

describe('SignUp Page', () => {
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
    });

    it('should show an error message for the passwords to be the same', () => {
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
            target: { value: "password1" },
        });
        fireEvent.change(screen.getByPlaceholderText("Confirme sua senha"), {
            target: { value: "password2" },
        })

        const button = screen.getByRole('button', { name: /Cadastrar/ });
        fireEvent.click(button);

        const errorMessage = screen.getByText(/A senha e a confirmação de senha devem ser iguais./);
        expect(errorMessage).toBeInTheDocument();        
    });

    it('should show an error message so that all fields are filled in', () => {
        render(
            <ThemeProvider>
                <BrowserRouter>
                    <SignUp />
                </BrowserRouter>
            </ThemeProvider>
        );

        fireEvent.change(screen.getByPlaceholderText("Digite seu email"), {
            target: { value: "" },
        });
        fireEvent.change(screen.getByPlaceholderText("Digite sua senha"), {
            target: { value: "password" },
        });
        fireEvent.change(screen.getByPlaceholderText("Confirme sua senha"), {
            target: { value: "password" },
        })

        const checking = screen.getByTestId('checkUp');
        fireEvent.click(checking);

        const button = screen.getByRole('button', { name: /Cadastrar/ });
        fireEvent.click(button);

        const errorMessage = screen.getByText(/Todos os campos são obrigatórios./);
        expect(errorMessage).toBeInTheDocument();        
    })

    it('should show an error message so that all fields are filled in', () => {
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
            target: { value: "" },
        });
        fireEvent.change(screen.getByPlaceholderText("Confirme sua senha"), {
            target: { value: "password2" },
        })

        const checking = screen.getByTestId('checkUp');
        fireEvent.click(checking);

        const button = screen.getByRole('button', { name: /Cadastrar/ });
        fireEvent.click(button);

        const errorMessage = screen.getByText(/Todos os campos são obrigatórios./);
        expect(errorMessage).toBeInTheDocument();        
    });

    it('should show an error message so that all fields are filled in', () => {
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
            target: { value: "password" },
        });
        fireEvent.change(screen.getByPlaceholderText("Confirme sua senha"), {
            target: { value: "" },
        })

        const checking = screen.getByTestId('checkUp');
        fireEvent.click(checking);

        const button = screen.getByRole('button', { name: /Cadastrar/ });
        fireEvent.click(button);

        const errorMessage = screen.getByText(/Todos os campos são obrigatórios./);
        expect(errorMessage).toBeInTheDocument();        
    })
});