import { useEffect, useState } from 'react';
import { CardList } from './Cards/CardList/CardList';
import Container from './Container/Container';
import { Header } from './Header/Header';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { SignUpForm } from './SignUpForm/SignUpForm';

import { Hero } from './Hero/Hero';
import Pets from './Pets/Pets';
import {
  getLocation,
  getWeather,
  getHourlForecast,
} from '../services/weatherApi';
import { Stats } from './Stats/Stats';
import { Table } from './Table/Table';
import { Graph } from './Graph/Graph';
import Footer from './Footer/Footer';
import Gallery from './Gallery/Gallery';
import fetchImages from 'services/pixabayApi';

export const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      try {
        const data = await fetchImages();
        setImages(data.hits);
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, []);

  const handleSearch = cityName => {
    getLocation(cityName)
      .then(coords => {
        getWeather(coords.lat, coords.lon).then(data => setWeather(data));
        getHourlForecast(coords.lat, coords.lon).then(data =>
          setForecast(data)
        );
      })
      .catch(() => {
        setWeather(null);
        setForecast(null);
      });
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
        {forecast && <Graph forecast={forecast} />}
        {forecast && <Table forecast={forecast} />}
        <Pets />
        <Gallery images={images} />
      </Container>

      <MobileMenu onOpenSignUp={openSignUpForm} />

      {showSignUpForm && <SignUpForm onClose={closeSignUpForm} />}

      <Footer />
    </>
  );
};
