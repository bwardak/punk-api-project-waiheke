
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { MemoryRouter, Route, Routes } from "react-router-dom";

it("should render the form", () => {
  // Arrange(setup)
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MemoryRouter>
  );

  // Act
  const home = screen.getByTestId("home-component");

  // Assert
  expect(home).toBeInTheDocument();
});