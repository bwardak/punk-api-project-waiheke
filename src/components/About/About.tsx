import "./About.scss";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h1 className="about__heading">About Us</h1>
      <Link to="/home" className="home-link">
        <Button variant="home" disabled={false} label={"Home"} />
      </Link>
      <div className="text-wrapper">
        <p className="about__text">MMMMMMMM BEEEEEEEEEEEERRR</p>
      </div>
    </div>
  );
};

export default About;
