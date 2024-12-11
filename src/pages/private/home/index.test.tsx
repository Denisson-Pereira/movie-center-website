import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ThemeProvider } from "../../../context/themeContext";
import { BrowserRouter } from "react-router";
import { Home } from ".";

describe("Home Page", () => {
    it("should display movie images", async () => {
        render(
            <ThemeProvider>
                <BrowserRouter>
                    <Home />
                </BrowserRouter>
            </ThemeProvider>
        );

        await waitFor(() => {
            const images = screen.getAllByRole("img");
            expect(images.length).toBeGreaterThan(0);
        })
    });
});
