import { useState, useEffect } from "react";
import "./App.scss";
import AppContext from "./Components/AppContext";
import Main from "./Components/Main";

function App() {
  const [movies, setMovies] = useState(null);
  const [cardData, setCardData] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText.length >= 3) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=8126951ea8559878cf9c291901eade75&language=en-US&query=${searchText}`
      )
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results.splice(0, 8));
        })
        .catch((_) => setMovies("ERROR"));
    } else {
      setMovies([]);
    }
  }, [searchText]);

  return (
    <div className="App">
      <AppContext.Provider
        value={{ movies, searchText, setSearchText, cardData, setCardData }}
      >
        <Main />
      </AppContext.Provider>
    </div>
  );
}

export default App;
