import { Button } from '../Button/Button';
import './BeerTiles.scss'
import { Link } from 'react-router-dom';

type Beers = {
  image: string;
  name: string;
  description: string;
  tagline: string;
  brewDate: string;
  abv: number;
  ph: number | null;
  foodPairing: string[];
  sideNavToggled: boolean;
  beerID: number;
}

const BeerTiles = ({image, name, description, tagline, brewDate, abv, ph, foodPairing, sideNavToggled, beerID}: Beers) => {

// console.log(sideNavToggled);

  const beerIdString = beerID.toString()

  if (description.length >= 100) {
    description = `${description.slice(0, 100)}... `;
  }

  

  return (
    <div className={`beers ${sideNavToggled ? "opened" : "closed"}`}>
      <div className="beers__image-background">
        <img className="beers__image" src={image} alt="Beer" />
      </div>
      <div className="beers__info">
        <h1
          style={{ fontSize: name.length >= 46 ? "22px" : "30px" }}
          className="beers__name"
        >
          {name}
        </h1>
        <h3
          style={{ fontSize: name.length >= 46 ? "14px" : "initial" }}
          className="beers__tagline"
        >
          {tagline}
        </h3>
        <p className="beers__brew-date">Brew Date: {brewDate}</p>
        <p className="beers__abv">ABV: {abv}</p>
        <p className="beers__ph">pH: {ph}</p>
        <p className="beers__food-pairing">
          Great With:
          <ul className="beers__food-pairing__list">
            {foodPairing.map((item, index) => (
              <li key={index}>{item.trim()}</li>
            ))}
          </ul>
        </p>
        <p>Description: </p>
        <p className="beers__description">{description}</p>
        
        <Link to={`/beers/${beerIdString}`} key={beerIdString}>
          <Button label='More Details' variant='info' disabled={false} />
        </Link>

        
      </div>
    </div>
  );
}

export default BeerTiles