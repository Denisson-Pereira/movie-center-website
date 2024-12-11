import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router";
import { Footer2 } from ".";
import { ThemeProvider } from "../../context/themeContext";


describe('Foot Component', () => {
    it('should show text', () => {
        render(
            <ThemeProvider>
                <BrowserRouter>
                    <Footer2 />
                </BrowserRouter>
            </ThemeProvider>
        );

        const title = screen.getByText(/Denisson Software Engineer Denisson/);
        expect(title).toBeInTheDocument();
    })
})