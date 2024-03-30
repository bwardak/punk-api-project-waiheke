import './BeerTiles.scss'

type Beers = {
  image: string;
  name: string;
  description: string;
}

const BeerTiles = ({image, name, description}: Beers) => {
  
  return (
    <div className="beers">
      <img src={image} alt="Beer" />
      <p>{name}</p>
      <p>{description}</p>
    </div>
  )
}

export default BeerTiles