import './App.scss'
import BeerTiles from './components/BeerTiles/BeerTiles'
import beers from './data/beers'

const App = () => {
  return (
    <div>
      <BeerTiles image={beers[0].image_url} name={beers[0].name} description={beers[0].description}/>
    </div>
  )
}

export default App
