import './SectionTiles.scss'

type SectionTilesProps = {
  title: string;
  imgUrl: string;
  buttonText: string;
}

const SectionTiles = ({title, imgUrl, buttonText}: SectionTilesProps) => {
  return (
    <div className="section-container">
      <h1 className="section-container__title">{title}</h1>
      <img
        src={imgUrl}
        alt="beers"
        className="section-container__image"
      />
      <p className="section-container__button">{buttonText}</p>
    </div>
  );
}

export default SectionTiles
