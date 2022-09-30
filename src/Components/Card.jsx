import React, { useContext } from "react";
import AppContext from "./AppContext";

const Card = () => {
  const { cardData } = useContext(AppContext);

  return (
    <div className="movie-card">
      <div className="movie-img">
        <img
          src={
            `https://www.themoviedb.org/t/p/original/` + cardData?.backdrop_path
          }
          alt={cardData?.original_title}
        />
      </div>
      <div className="movie-description">
        <h3>
          {cardData?.original_title} ({cardData.release_date.slice(0, 4)})
        </h3>
        <p className="movie-language">
          Original language: {cardData?.original_language.toUpperCase()}
        </p>
        <div className="movie-rating">
          <svg className="star-svg">
            <use xlinkHref="#star"></use>
          </svg>
          <div className="rating-numbers">
            <div>{cardData?.vote_average} /10</div>
            <div>{cardData?.vote_count} votes</div>
          </div>
        </div>
        <p>{cardData?.overview}</p>
      </div>
    </div>
  );
};

export default Card;
