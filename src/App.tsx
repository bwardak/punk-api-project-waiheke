import { useState } from 'react'
import './App.scss'
import BeerContainer from './components/BeerContainer/BeerContainer'
import SideNav from './components/SideNav/SideNav'
import beers from './data/beers'
import { Beer } from './data/types'


const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false)

  const handleSearchTermChange = (cleanInput: string) => {
    setSearchTerm(cleanInput)
  }

  const handleCheckboxChange = (checked: boolean) => {
    setChecked(checked)
  }

  const beersCopy = [...beers]

  let filteredBeers: Beer[] = []

  console.log(checked);
  
  if (checked) {
    filteredBeers = beersCopy.filter((beer) =>
      beer.abv >= 6
    )
  } else if (!checked){
    filteredBeers = beersCopy
  }

  const searchedBeers = filteredBeers.filter((beer) => 
    beer.name.toLowerCase().includes(searchTerm)
  )

 

  return (
    <div className='app-container'>
      <div className="nav-bar">
        <SideNav onSearchTermChange={handleSearchTermChange} onCheckBoxChange={handleCheckboxChange}/>
      </div>
      <div className="beer-tiles">
        <BeerContainer searchBeers={searchedBeers}/>
      </div>
    </div>
  );
}

export default App
