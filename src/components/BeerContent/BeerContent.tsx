import "./BeerContent.scss";
import { useEffect, useState } from "react";
import BeerContainer from "../BeerContainer/BeerContainer";
import SideNav from "../SideNav/SideNav";
import { Beer } from "../../data/types";
import beers from "../../data/dataFormatted (1)";


export const BeerContent = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [abvChecked, setAbvChecked] = useState<boolean>(false);
  const [classicChecked, setClassicChecked] = useState<boolean>(false);
  const [acidityChecked, setAcidityChecked] = useState<boolean>(false);
  const [filteredBeers, setFilteredBeers] = useState<Beer[]>(beers);
  const [sideNavToggled, setSideNavToggled] = useState<boolean>(false);

  const handleSearchTermChange = (cleanInput: string) => {
    setSearchTerm(cleanInput);
  };

  const handleAbvCheckboxChange = (checked: boolean) => {
    setAbvChecked(checked);
  };

  const handleClassicCheckboxChange = (checked: boolean) => {
    setClassicChecked(checked);
  };

  const handleAcidityCheckboxChange = (checked: boolean) => {
    setAcidityChecked(checked);
  };

  const handleSideNavToggleChange = (toggled: boolean) => {
    setSideNavToggled(toggled);
  };

  useEffect(() => {
    let beersCopy = [...beers];

    if (abvChecked) {
      beersCopy = beersCopy.filter((beer) => beer.abv >= 6);
    }
    if (classicChecked) {
      beersCopy = beersCopy.filter((beer) => {
        let splitDate = beer.first_brewed.split("/");
        let yearBrewed = splitDate.slice(1);
        return parseInt(yearBrewed[0]) < 2010;
      });
    }
    if (acidityChecked) {
      beersCopy = beersCopy.filter((beer) => beer.ph !== null && beer.ph <= 4);
    }
    if (!abvChecked && !classicChecked && !acidityChecked) {
      beersCopy = beersCopy;
    }
    setFilteredBeers(beersCopy);
  }, [abvChecked, classicChecked, acidityChecked]);

  const searchedBeers = filteredBeers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div
      data-testid="beer-content"
      className="app-container"
      id={`${sideNavToggled ? "shrink" : "grow"}`}
    >
      <div data-testid="side-nav" className="nav-bar">
        <SideNav
          onSearchTermChange={handleSearchTermChange}
          onAbvCheckBoxChange={handleAbvCheckboxChange}
          onClassicCheckBoxChange={handleClassicCheckboxChange}
          onAcidityCheckBoxChange={handleAcidityCheckboxChange}
          onSideNavMenuToggle={handleSideNavToggleChange}
        />
      </div>
      <div className="main-screen">
        <h1 className="main-screen__header">BEER</h1>
        <div data-testid="beers-tiles" className="beer-tiles">
          <BeerContainer
            searchBeers={searchedBeers}
            sideNavToggled={sideNavToggled}
            abvChecked={abvChecked}
            classicChecked={classicChecked}
            acidityChecked={acidityChecked}
          />
        </div>
      </div>
    </div>
  );
};

export default BeerContent;
