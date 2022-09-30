import React, { useContext } from "react";
import AppContext from "./AppContext";
import List from "./List";
import Card from "./Card";

const Main = () => {
  const { searchText, setSearchText, cardData } = useContext(AppContext);

  return (
    <div className="container">
      <section className="header col-12">
        <div className="search-field">
          <svg className="search-svg">
            <use xlinkHref="#movie"></use>
          </svg>
          <input
            className="search-input"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-button" onClick={() => setSearchText("")}>
            x
          </button>
        </div>
        <List />
      </section>

      <section className="main-content col-12">{cardData && <Card />}</section>
    </div>
  );
};

export default Main;
