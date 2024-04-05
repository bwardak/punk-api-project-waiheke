import './BeerInfo.scss'
import { Beer } from '../../data/types';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import BeerContent from '../BeerContent/BeerContent'

type BeerInfoProps = {
    beers: Beer[];
  }
const BeerInfo = ({beers}: BeerInfoProps) => {
  const {beerId} = useParams();
  console.log(beerId);
  
  const beer = beers.find(b => b.id.toString() === beerId);
  if (!beer) {
    return <p>Could not find a beer with that Id!</p>
  }
  
  return (
    <div data-testid="beer-info" className="beer-info-container">
      <Link to="/beers" className='back-link'>
        <h1 className='back'>BACK</h1>
      </Link>
      <div className="beer-info">
        <img
          src={
            beer.image_url ??
            "https://media.istockphoto.com/id/520229130/photo/bottle-of-beer-on-white-background.jpg?s=612x612&w=0&k=20&c=pjleW3VBHs2dSVh95YtSkjIBrdLGkhkZ0fW4LWPznbM="
          }
          alt=""
          className="beer-info__image"
        />
        <p className='beer-info__name'>{beer.name}</p>
        <p className='beer-info__brewed'>Date Brewed: {beer.first_brewed}</p>
        <p className='beer-info__abv'>ABV: {beer.abv}</p>
        <p className='beer-info__ph'>pH: {beer.ph}</p>
        <p className='beer-info__description-label'>Description: </p>
        <br />
        <p className='beer-info__description-text'>{beer.description}</p>
      </div>
    </div>
  );
}

export default BeerInfo
