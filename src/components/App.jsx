import { useState } from 'react';
import { CardList } from './Cards/CardList/CardList';
import Container from './Container/Container';
import { Header } from './Header/Header';

import { Hero } from './Hero/Hero';
import { Pets } from './Pets/Pets';
import { getLocation, getWeather } from './services/weatherApi';



  

export const App = () => {
  const [weather, setWrather] = useState(null);

  const handleSearch = cityName => {
    getLocation(cityName)
      .then(coords => getWeather(coords.lat, coords.lon))
      .then(data => setWrather(data))
      .catch(() => setWrather(null))
  };

  return (
    <Container>
      <Header />

      <Hero onSearch={handleSearch}></Hero>
      {weather && <CardList weather={weather}></CardList>}




      <Pets></Pets>
    </Container>
  );
};
