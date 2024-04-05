import { Link } from "react-router-dom";
import "./Home.scss";
import SectionTiles from "../SectionTiles/SectionTiles";

export const Home = () => {
  return (
    <div className="home" data-testid="home-component">
      <h1 className="home__heading">Punk API Project</h1>
      <Link to={`/about`} key={1} className="home__section">
        <SectionTiles
          title="About"
          imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/1b/78/81/ac/jabeerwocky-craft-beer.jpg"
          buttonText="About Us"
        />
      </Link>
      <Link to={`/beers`} key={2} className="home__section">
        <SectionTiles
          title="Beers"
          imgUrl="https://www.grainstorebrewery.com/wp-content/uploads/grainstore-bar-3.jpg"
          buttonText="Explore Beers"
        />
      </Link>
    </div>
  );
};

export default Home;
