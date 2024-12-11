import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Perfil } from ".";
import { MemoryRouter, Routes, Route } from "react-router";
import { SignIn } from "../..";
import { ThemeProvider } from "../../../context/themeContext";

describe('Perfil Page', () => {
    it('should show welcome message', () => {
        render(
            <ThemeProvider>
                <MemoryRouter>
                    <Perfil />
                </MemoryRouter>
            </ThemeProvider>
        );

        const welcomeMessage = screen.getByText(/Bem-vindo, Usuário!/);
        expect(welcomeMessage).toBeInTheDocument();
    });

    it('should show person area message', () => {
        render(
            <MemoryRouter>
                <Perfil />
            </MemoryRouter>
        );

        const areaMessage = screen.getByText(/Esta é a sua área de perfil. Você pode gerenciar suas configurações aqui./);
        expect(areaMessage).toBeInTheDocument();
    });

    it("should redirect on button click", async () => {
        render(
            <ThemeProvider>
                <MemoryRouter initialEntries={["/perfil"]}>
                    <Routes>
                        <Route path="/" element={<SignIn />} />
                        <Route path="/perfil" element={<Perfil />} />
                    </Routes>
                </MemoryRouter>
            </ThemeProvider>
        );

        const button = screen.getByRole('button', { name: /Sair/ });
        fireEvent.click(button);

        await waitFor(() => {
            const errorMessage = screen.getByText(/Eu concordo com os termos de uso./);
            expect(errorMessage).toBeInTheDocument();
        });
    });
});
