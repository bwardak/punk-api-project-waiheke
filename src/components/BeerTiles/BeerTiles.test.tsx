import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BeerInfo from "../BeerInfo/BeerInfo";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import beers from "../../data/dataFormatted (1)";
import BeerContent from "../BeerContent/BeerContent";
it("should render beer info when button is clicked", async () => {
  render(
    <MemoryRouter initialEntries={["/beers"]}>
      <Routes>
        <Route path="/beers" element={<BeerContent />} />
        <Route path="/beers/:beerId" element={<BeerInfo beers={beers}/>} />
      </Routes>
    </MemoryRouter>
  );

  const button =  screen.getAllByRole("button", { name: /More Details/i });
  expect(button[0]).toBeInTheDocument();
  await userEvent.click(button[0]);

  const beerInfo = await screen.findByTestId("beer-info");
  expect(beerInfo).toBeInTheDocument();
});