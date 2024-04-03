import { useEffect, useState } from "react";
import "./App.scss";
import BeerContainer from "./components/BeerContainer/BeerContainer";
import SideNav from "./components/SideNav/SideNav";
import { Beer } from "./data/types";
import beers from "./data/dataFormatted (1)";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import BeerContent from "./components/BeerContent/BeerContent";

const App = () => {
  

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/beers" element={<BeerContent />} />
            
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
