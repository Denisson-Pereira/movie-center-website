import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Line } from ".";
import { ThemeProvider } from "../../context/themeContext";

describe("Line component", () => {
  it("should render the Container and ContainerLine", () => {
    render(
        <ThemeProvider>
            <Line />
        </ThemeProvider>
    );

    const containerElement = screen.getByTestId("container-for-line");
    expect(containerElement).toBeInTheDocument();

    const containerLineElement = screen.getByTestId("container-line");
    expect(containerLineElement).toBeInTheDocument();
  });
});
