import './BeerTiles.scss'

type Beers = {
  image: string;
  name: string;
  description: string;
  tagline: string;
  brewDate: string;
  abv: number;
  ph: number | null;
}

const BeerTiles = ({image, name, description, tagline, brewDate, abv, ph}: Beers) => {

  let beerDescription: string[] = description.split(".");
let truncatedBeerDescription: string = "";
let totalLength: number = 0;

for (let i: number = 0; i < beerDescription.length; i++) {
    const sentence = beerDescription[i].trim() + ".";
    if (totalLength + sentence.length <= 300) {
        truncatedBeerDescription += sentence;
        totalLength += sentence.length;
    } else {
        break;
    }
}

  console.log(beerDescription[0].length);
  

  // if (truncatedBeerDescription.length >= 260) {
  //   truncatedBeerDescription = `${truncatedBeerDescription.slice(0, 250)}... `;
  // }

  // if (truncatedBeerDescription === "") {
  //   truncatedBeerDescription = `${description.slice(0, 250)}... `
  // }
  

  return (
    <div className="beers">
      <div className="beers__image-background">
        <img className="beers__image" src={image} alt="Beer" />
      </div>
      <div className="beers__info">
        <h1 className="beers__name">{name}</h1>
        <h3 className="beers__tagline">{tagline}</h3>
        <p className="beers__brew-date">Brew Date: {brewDate}</p>
        <p className="beers__abv">ABV: {abv}</p>
        <p className="beers__ph">pH: {ph}</p>
        <p className="beers__description">{truncatedBeerDescription}</p>
      </div>
    </div>
  );
}

export default BeerTiles