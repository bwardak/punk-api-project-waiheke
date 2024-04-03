import { Link } from 'react-router-dom';
import './Home.scss'



export const Home = () => {
  return (
    <div>
      <p>Home Page</p>
      <Link to={`/beers`} key={1}>
        <h1>BEEEEERS</h1>
      </Link>
    </div>
  );
}

export default Home
