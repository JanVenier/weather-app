
import './App.css';
import SearchBar from "./components/searchBar/searchBar";
import RecentSearches from "./components/recentSearches/recentSearches";
import Weather from "./components/Weather/weather";
import {useState} from "react";
import {weatherApiBaseUrl, weatherApiKey} from "./api";

function App() {

  const [recentSearches, setRecentSearches] = useState([]);
  const [weather, setWeather] = useState(null);
  const [search, setSearch] = useState(null);

  console.log(weather)

  const updateRecentSearches = (searchedCity) => {

      if (recentSearches.includes(searchedCity)) { //check if city already exists in array of previously searched cities

          return;
      }

      if (recentSearches.length === 5) {

          recentSearches.pop(); // remove the oldest search when length of searched cities array exceeds 5
      }

      recentSearches.unshift(searchedCity); // add the most recent search to the beginning
      setRecentSearches([...recentSearches]);
  }

  const showWeatherHandler = (cityApiData) => {

      const [lat, lon] = cityApiData.value.split(','); //extract coordinates

      fetch(`${weatherApiBaseUrl}lat=${lat}&lon=${lon}&units=metric&appId=${weatherApiKey}`) // get api data
          .then(async (res) => {

              const weatherData = await res.json();
              setWeather(weatherData);
              updateRecentSearches(cityApiData) // update recent searches on successful api request
          })
          .catch((err) => {console.log(err)})
  }

  return (
    <div className="App container">
        <h1 className={'app-heading'}>What's the weather?</h1>
        <SearchBar
            onSearchChange={showWeatherHandler}
            searchValue={search}
            setSearch={setSearch}
        />

        {weather && <Weather
            weatherData={weather}
        />}

        {recentSearches.length > 0 && <RecentSearches
            recentSearches={recentSearches}
            itemClickHandler={showWeatherHandler}
            setSearch={setSearch}
        />}

    </div>
  );
}

export default App;
