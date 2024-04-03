import { useEffect, useState } from "react";
import "./App.scss";
import BeerContainer from "./components/BeerContainer/BeerContainer";
import SideNav from "./components/SideNav/SideNav";
import { Beer } from "./data/types";
import beers from "./data/dataFormatted (1)";
import { BrowserRouter, Route, Routes, Navigate  } from "react-router-dom";
import BeerContent from "./components/BeerContent/BeerContent"
import Home from "./components/Home/Home";

const App = () => {
  

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<BeerContent />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
