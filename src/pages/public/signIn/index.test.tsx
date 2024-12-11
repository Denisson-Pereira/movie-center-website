import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { SignIn } from '.';
import { ThemeProvider } from '../../../context/themeContext';

describe('SignIn Page', () => {
    it('should show error message if user clicks submit without agreeing to terms', () => {
        render(
            <ThemeProvider>
                <BrowserRouter>
                    <SignIn />
                </BrowserRouter>
            </ThemeProvider>
        );

        fireEvent.change(screen.getByPlaceholderText("Digite seu email"), {
            target: { value: "test@example.com" },
        });
        fireEvent.change(screen.getByPlaceholderText("Digite sua senha"), {
            target: { value: "password123" },
        });

        const button = screen.getByRole('button', { name: /Entrar/ });
        fireEvent.click(button);

        const errorMessage = screen.getByText(/Você precisa concordar com os termos de uso/);
        expect(errorMessage).toBeInTheDocument();
    });

    it('should show an error message if the user enters invalid credentials', async () => {
        render(
            <ThemeProvider>
                <BrowserRouter>
                    <SignIn />
                </BrowserRouter>
            </ThemeProvider>
        );

        fireEvent.change(screen.getByPlaceholderText("Digite seu email"), {
            target: { value: "test@example.com" },
        });
        fireEvent.change(screen.getByPlaceholderText("Digite sua senha"), {
            target: { value: "password123" },
        });
    
        const check = screen.getByTestId('check');
        await fireEvent.click(check);
    
        const button = screen.getByRole('button', { name: /Entrar/ });
        fireEvent.click(button);
    
        await waitFor(() => {
            const errorMessage = screen.getByText(/Erro ao fazer login. Verifique suas credenciais./);
            expect(errorMessage).toBeInTheDocument();
        });
    })
});
