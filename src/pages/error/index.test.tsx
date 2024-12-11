import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ErrorPage } from ".";

describe('ErrorPage', () => {
    it('should show error message', () => {
        render(
            <ErrorPage />
        );

        const erroMessage = screen.getByText(/error/);
        expect(erroMessage).toBeInTheDocument();
    });
});