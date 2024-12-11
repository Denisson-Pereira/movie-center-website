import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ThemeProvider } from "../../context/themeContext";
import { BotaoTrocarTema } from ".";

describe("Change Theme Component", () => {
    it("shoul render the container", () => {
        render(
            <ThemeProvider>
                <BotaoTrocarTema />
            </ThemeProvider>
        );

        const containerElement = screen.getByTestId("container-dark-mode");
        expect(containerElement).toBeInTheDocument();
    })
})