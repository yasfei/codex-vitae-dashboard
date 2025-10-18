import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders header title", () => {
  render(<Header />);
  const title = screen.getByText(/Codex Vitae/i);
  expect(title).toBeInTheDocument();
});
