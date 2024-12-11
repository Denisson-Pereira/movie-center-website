import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "../../context/themeContext";
import { Footer } from ".";


describe('Footer Component', () => {
    it('should show text', () => {
        render(
            <ThemeProvider>
                <BrowserRouter>
                    <Footer />
                </BrowserRouter>
            </ThemeProvider>
        );

        const title = screen.getByText(/CONTACT/);
        expect(title).toBeInTheDocument();
    })
})