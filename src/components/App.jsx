import { useState } from 'react';
import { CardList } from './Cards/CardList/CardList';
import Container from './Container/Container';
import { Header } from './Header/Header';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { SignUpForm } from './SignUpForm/SignUpForm';

import { Hero } from './Hero/Hero';
import { Pets } from './Pets/Pets';
import { getLocation, getWeather } from '../services/weatherApi';
import { Stats } from './Stats/Stats';

export const App = () => {
  const [weather, setWeather] = useState(null);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleSearch = cityName => {
    getLocation(cityName)
      .then(coords => getWeather(coords.lat, coords.lon))
      .then(data => setWeather(data))
      .catch(() => setWeather(null));
  };

  const openSignUpForm = () => setShowSignUpForm(true);
  const closeSignUpForm = () => setShowSignUpForm(false);

  return (
  <>
    <Container>
      <Header onOpenSignUp={openSignUpForm} />
    </Container>

    <Hero onSearch={handleSearch} />

    <Container>
      {weather && <CardList weather={weather} />}
      {weather && <Stats weather={weather} />}
      <Pets />
    </Container>

    <MobileMenu onOpenSignUp={openSignUpForm} />

    {showSignUpForm && <SignUpForm onClose={closeSignUpForm} />}
  </>
);
