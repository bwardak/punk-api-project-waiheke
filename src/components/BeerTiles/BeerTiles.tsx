import './BeerTiles.scss'

type Beers = {
  image: string;
  name: string;
  description: string;
}

const BeerTiles = ({image, name, description}: Beers) => {
  
  return (
    <div className="beers">
      <img className='beers__image' src={image} alt="Beer" />
      <h1 className='beers__name'>{name}</h1>
      <p className='beers__description'>{description}</p>
    </div>
  )
}

export default BeerTiles