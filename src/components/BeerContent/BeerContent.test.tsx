import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BeerContent from './BeerContent'
import { MemoryRouter, Routes, Route } from "react-router-dom";
import BeerInfo from "../BeerInfo/BeerInfo";

it("should render the beer content", () => {
  render(
    <MemoryRouter initialEntries={["/beers"]}>
      <Routes>
        <Route path="/beers" element={<BeerContent />} />
      </Routes>
    </MemoryRouter>
  );

  const content = screen.getByTestId("beer-content")
  expect(content).toBeInTheDocument;
})

it("should render my side nav and beer tiles inside beer content component", () => {
  render(
    <MemoryRouter initialEntries={["/beers"]}>
      <Routes>
        <Route path="/beers" element={<BeerContent />} />
      </Routes>
    </MemoryRouter>
  );

  const sideNav = screen.getByTestId("side-nav")
  expect(sideNav).toBeInTheDocument

  const beerTiles = screen.getByTestId("beers-tiles")
  expect(beerTiles).toBeInTheDocument
})

