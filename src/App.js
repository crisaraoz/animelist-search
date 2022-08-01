import { BrowserRouter as Router, Route, Redirect, Routes} from 'react-router-dom';
import Home from './pages/Home';
import MainNavigation from './components/MainNavigation';
import Results from './pages/Results';
import SingleView from './pages/SingleView';
import { useState } from 'react';
import { SearchContext } from './context/search';

function App() {
  const [animeData, setAnimeData] = useState([]);
  const [singleData, setSingleData] = useState({});

  const setData = (data) => {
    setAnimeData(data)
  };

  const setSingle = (data) => {
    setSingleData(data)
  };

  const search = (searchTerm) => {
    return fetch(
      `https://api.jikan.moe/v3/search/anime?q=${searchTerm}&limit=50`
    ).then((response) => response.json());
  };

  return (
    <SearchContext.Provider value={{search, animeData, singleData, setData, setSingle}}>
    <Router>
        <MainNavigation />
        <main>
          <Routes>
              <Route path="/anime-searchbar" element={<Home />} />
              <Route path="/results" element={<Results />} />
              <Route path="/single-view" element={<SingleView />} />
          </Routes>
        </main>
    </Router>
    </SearchContext.Provider>
  );
}

export default App;

