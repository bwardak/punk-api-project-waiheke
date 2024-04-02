import { useEffect, useState } from "react";
import "./App.scss";
import BeerContainer from "./components/BeerContainer/BeerContainer";
import SideNav from "./components/SideNav/SideNav";
import beers from "./data/beers";
import { Beer } from "./data/types";

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [abvChecked, setAbvChecked] = useState<boolean>(false);
  const [classicChecked, setClassicChecked] = useState<boolean>(false);
  const [acidityChecked, setAcidityChecked] = useState<boolean>(false);
  const [filteredBeers, setFilteredBeers] = useState<Beer[]>(beers)

  const getBeers = async() => {
    const url = `C:\Users\bahee\nology\nology-projects\project-5-punkapi\punk-api-project-waiheke\src\data\data (2).json`;
    const res = await fetch(url)
    const data: Beer = await res.json()
    console.log(data);
  }

  useEffect(() => {
    getBeers()
  }, [])

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
      beersCopy = beersCopy.filter((beer) => beer.ph <= 4);
    }
    if (!abvChecked && !classicChecked && !acidityChecked) {
      beersCopy = beersCopy;
    }
    setFilteredBeers(beersCopy)
    console.log(beersCopy);
    
  }, [abvChecked, classicChecked, acidityChecked])
  
  

  const searchedBeers = filteredBeers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="app-container">
      <div className="nav-bar">
        <SideNav
          onSearchTermChange={handleSearchTermChange}
          onAbvCheckBoxChange={handleAbvCheckboxChange}
          onClassicCheckBoxChange={handleClassicCheckboxChange}
          onAcidityCheckBoxChange={handleAcidityCheckboxChange}
        />
      </div>
      <div className="beer-tiles">
        <BeerContainer searchBeers={searchedBeers} />
      </div>
    </div>
  );
};

export default App;
