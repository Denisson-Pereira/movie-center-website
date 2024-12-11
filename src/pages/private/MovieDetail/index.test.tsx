import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ThemeProvider } from "../../../context/themeContext";
import { BrowserRouter } from "react-router";
import { MovieDetail } from ".";


describe('MovieDetail Page', () => {
    it('should retorn to home screen', () => {
        render(
            <ThemeProvider>
                <BrowserRouter>
                    <MovieDetail />
                </BrowserRouter>
            </ThemeProvider>
        );

        const title = screen.getByText(/Loading/);
        expect(title).toBeInTheDocument();
    })
})