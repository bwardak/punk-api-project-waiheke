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
          image={beer.image_url ??
            "https://media.istockphoto.com/id/520229130/photo/bottle-of-beer-on-white-background.jpg?s=612x612&w=0&k=20&c=pjleW3VBHs2dSVh95YtSkjIBrdLGkhkZ0fW4LWPznbM="}
          name={beer.name}
          description={beer.description} tagline={beer.tagline} brewDate={beer.first_brewed} abv={beer.abv} ph={beer.ph}        />
      ))}
    </div>
  );
}

export default BeerContainer