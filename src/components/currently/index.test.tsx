import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "../../context/themeContext";
import { Currently } from ".";


describe('Currently Component', () => {
    it('should show text', () => {
        render(
            <ThemeProvider>
                <BrowserRouter>
                    <Currently />
                </BrowserRouter>
            </ThemeProvider>
        );

        const title = screen.getByText(/Currently playing/);
        expect(title).toBeInTheDocument();
    })
})