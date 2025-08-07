import { useState, useEffect } from 'react';
import { CardList } from './Cards/CardList/CardList';
import Container from './Container/Container';
import { Header } from './Header/Header';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { SignUpForm } from './SignUpForm/SignUpForm';

import { Hero } from './Hero/Hero';
import { Pets } from './Pets/Pets';
import {
  getLocation,
  getWeather,
  getHourlForecast,
  getDailyForecast,
} from '../services/weatherApi';
import { CardListBox, CardListText } from './App.styled';

import { Stats } from './Stats/Stats';
// import { Table } from './Table/Table';
import { Graph } from './Graph/Graph';
import Footer from './Footer/Footer';
import Gallery from './Gallery/Gallery';
import fetchImages from 'services/pixabayApi';

export const App = () => {
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

  const [cities, setCities] = useState(() => {
    const savedCities = localStorage.getItem('cities');
    return savedCities ? JSON.parse(savedCities) : [];
  });

  useEffect(() => {
    localStorage.setItem('cities', JSON.stringify(cities));
  }, [cities]);

  const handleSearch = cityName => {
    getLocation(cityName)
      .then(coords => {
        Promise.all([
          getWeather(coords.lat, coords.lon),
          getHourlForecast(coords.lat, coords.lon),
          getDailyForecast(coords.lat, coords.lon),
        ]).then(([weatherData, forecastData, dailyForecast]) => {
          const findCity = cities.find(
            city => city.weather.id === weatherData.id);

          if (!findCity) {
            setCities(prev => [
              ...prev,
              {
                weather: weatherData,
                forecast: forecastData,
                daily: dailyForecast,
              },
            ]);
          }
        });
      })
      .catch(() => {});
  };

  const handleDelete = id => {
    setCities(cities.filter(city => city.weather.id !== id));
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
        {cities.length > 0 ? (
          <CardList cities={cities} onDelete={handleDelete} />
        ) : (
          <CardListBox>
            <CardListText>Search some city above</CardListText>
          </CardListBox>
        )}

        {cities.length > 0 && <Stats weather={cities[0].weather} />}
        {cities.length > 0 && <Graph forecast={cities[0].forecast} />}
        {/* {cities.length > 0 && cities[0].daily && <Table daily={cities[0].daily} />} */}

        <Pets />
      </Container>

      <MobileMenu onOpenSignUp={openSignUpForm} />

      {showSignUpForm && <SignUpForm onClose={closeSignUpForm} />}
      <Gallery images={images} />
      <Footer />
    </>
  );
};
