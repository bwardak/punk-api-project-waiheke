import './BeerContent.scss'
import { useEffect, useState } from "react";
import BeerContainer from '../BeerContainer/BeerContainer';
import SideNav from '../SideNav/SideNav';
import { Beer } from '../../data/types'; 
import beers from '../../data/dataFormatted (1)';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const Home = () => {
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
       beersCopy = beersCopy.filter((beer) => beer.ph <= 4 && beer.ph !== null);
     }
     if (!abvChecked && !classicChecked && !acidityChecked) {
       beersCopy = beersCopy;
     }
     setFilteredBeers(beersCopy);
     console.log(beersCopy);
   }, [abvChecked, classicChecked, acidityChecked]);

   const searchedBeers = filteredBeers.filter((beer) =>
     beer.name.toLowerCase().includes(searchTerm)
   );

  return (
    <div className="app-container" id={`${sideNavToggled ? "shrink" : "grow"}`}>
      <div className="nav-bar">
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
        <div className="beer-tiles">
          <BeerContainer
            searchBeers={searchedBeers}
            sideNavToggled={sideNavToggled}
          />
        </div>
      </div>
    </div>
  );
}

export default Home
