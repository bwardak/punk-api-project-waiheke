import { useState } from 'react'
import './App.scss'
import BeerContainer from './components/BeerContainer/BeerContainer'
import SideNav from './components/SideNav/SideNav'
import beers from './data/beers'


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (cleanInput: string) => {
    setSearchTerm(cleanInput)
  }

  const searchedBeers = beers.filter((beer) => 
    beer.name.toLowerCase().includes(searchTerm)
  )

 

  return (
    <div className='app-container'>
      <div className="nav-bar">
        <SideNav onSearchTermChange={handleSearchTermChange}/>
      </div>
      <div className="beer-tiles">
        <BeerContainer searchBeers={searchedBeers}/>
      </div>
    </div>
  );
}

export default App
