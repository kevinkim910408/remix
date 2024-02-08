import { render, screen } from "@testing-library/react";
import Index from "./_index";

test("Home Page", () => {
  render(<Index />);
  // const buttonElement = screen.getByText("Click me");
  // expect(buttonElement).toBeInTheDocument();
  // expect(buttonElement).toHaveClass("text-red-600");
});
