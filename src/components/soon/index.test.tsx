import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router";
import { Soon } from ".";


describe('Soon Component', () => {
    it('should show text', () => {
        render(
            <BrowserRouter>
                <Soon />
            </BrowserRouter>
        );

        const title = screen.getByText(/Coming soon/);
        expect(title).toBeInTheDocument();
    })
})