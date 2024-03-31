import BeerTiles from "../BeerTiles/BeerTiles";
import './BeerContainer.scss'
import { Beer } from "../../data/types";

type BeerContainerProps = {
  searchBeers: Beer[];
}

const BeerContainer = ({searchBeers}: BeerContainerProps) => {

  return (
    <div className="beer-tiles-container">
      {searchBeers.map((beer) => (
        <BeerTiles
          key={beer.id}
          image={beer.image_url}
          name={beer.name}
          description={beer.description}
        />
      ))}
    </div>
  );
}

export default BeerContainer