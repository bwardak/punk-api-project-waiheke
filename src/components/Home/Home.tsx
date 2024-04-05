import { Link } from 'react-router-dom';
import './Home.scss'



export const Home = () => {
  return (
    <div className="home" data-testid="home-component">
      <h1 className="home__heading">Punk API Project</h1>
      <Link to={`/beers`} key={1} className="home__beers">
        <div className="beers-container">
          <h1 className='home__beers--title'>Beers</h1>
          <img
            src="https://www.grainstorebrewery.com/wp-content/uploads/grainstore-bar-3.jpg"
            alt="beers"
            className="home__beers--image"
          />
          <p className='home__beers--button'>Explore Beers</p>
        </div>
      </Link>
    </div>
  );
}

export default Home
