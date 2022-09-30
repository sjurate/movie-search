import React, { useContext } from "react";
import AppContext from "./AppContext";

const Line = ({ movie }) => {
  const { setCardData, setSearchText } = useContext(AppContext);

  const showCard = () => {
    setCardData(movie);
    setSearchText("");
  };
  return (
    <div className="movie-line" movie={movie} onClick={() => showCard()}>
      <div className="movie-title">{movie.original_title}</div>
      <div>
        <span>{movie.vote_average} Rating,</span>
        <span>{movie.release_date}</span>
      </div>
    </div>
  );
};

export default Line;
