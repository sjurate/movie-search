import React, { useContext } from "react";
import AppContext from "./AppContext";
import Line from "./Line";

const List = () => {
  const { movies } = useContext(AppContext);

  return (
    <div className="movies-list">
      {movies?.map((movie) => (
        <Line key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default List;
