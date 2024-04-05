import BeerTiles from "../BeerTiles/BeerTiles";
import "./BeerContainer.scss";
import { Beer } from "../../data/types";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";

type BeerContainerProps = {
  searchBeers: Beer[];
  sideNavToggled: boolean;
  abvChecked: boolean;
  classicChecked: boolean;
  acidityChecked: boolean;
};

const BeerContainer = ({ searchBeers, sideNavToggled, abvChecked, classicChecked, acidityChecked }: BeerContainerProps) => {
  const [page, setPage] = useState<number>(1)

  const firstIndex: number = (page - 1) * 30;
  const lastIndex: number = (firstIndex + 30);
  // console.log(firstIndex, lastIndex);
  
  console.log(page);

  // let abvPageReset = abvChecked
  // let classicPageReset = classicChecked
  // let acidityChecked = 
  

  let searchBeers50Results = [...searchBeers].slice(firstIndex, lastIndex);
  // console.log(searchBeers50Results);

  useEffect(() => {
    if (abvChecked) {
      setPage(1);
    }

    if (classicChecked) {
      setPage(1);
    }

    if (acidityChecked) {
      setPage(1);
    }
  }, [abvChecked, classicChecked, acidityChecked])

  

  const goNextPage = () => {
    setPage(page + 1)
    searchBeers50Results = []
  }

  if (page === 1) {
    
  }

  const goLastPage = () => {
    setPage(page - 1)
    searchBeers50Results = [];
  }

  return (
    <div>
      <div className="page-container page-container--1">
        <Button
          hide={searchBeers.length <= 30}
          label="Next"
          disabled={lastIndex >= searchBeers.length}
          variant="next"
          onClick={goNextPage}
        />
        <p
          className={`page-container__page ${
            searchBeers.length <= 30 ? "page-hidden" : ""
          }`}
        >
          {page}
        </p>
        <Button
          hide={searchBeers.length <= 30}
          label="Previous"
          disabled={page === 1}
          variant="last"
          onClick={goLastPage}
        />
      </div>
      <div
        className={`beer-tiles-container ${
          searchBeers.length <= 30 ? "extend-container" : ""
        }`}
      >
        {searchBeers50Results.map((beer) => (
          <BeerTiles
            key={beer.id}
            image={
              beer.image_url ??
              "https://media.istockphoto.com/id/520229130/photo/bottle-of-beer-on-white-background.jpg?s=612x612&w=0&k=20&c=pjleW3VBHs2dSVh95YtSkjIBrdLGkhkZ0fW4LWPznbM="
            }
            name={beer.name}
            description={beer.description}
            tagline={beer.tagline}
            brewDate={beer.first_brewed}
            abv={beer.abv}
            ph={beer.ph}
            foodPairing={beer.food_pairing}
            sideNavToggled={sideNavToggled}
            beerID={beer.id}
          />
        ))}
      </div>
      <div className="page-container page-container--2">
        <Button
          hide={searchBeers.length <= 30}
          label="Next"
          disabled={lastIndex >= searchBeers.length}
          variant="next"
          onClick={goNextPage}
        />
        <p
          className={`page-container__page ${
            searchBeers.length <= 30 ? "page-hidden" : ""
          }`}
        >
          {page}
        </p>
        <Button
          hide={searchBeers.length <= 30}
          label="Previous"
          disabled={page === 1}
          variant="last"
          onClick={goLastPage}
        />
      </div>
    </div>
  );
};

export default BeerContainer;
