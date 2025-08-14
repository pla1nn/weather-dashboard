import { useState, useEffect, createContext } from 'react';
import { CardList } from './Cards/CardList/CardList';
import Container from './Container/Container';
import { Header } from './Header/Header';
// import { MobileMenu } from './MobileMenu/MobileMenu';
import { SignUpForm } from './SignUpForm/SignUpForm';
import { Hero } from './Hero/Hero';
import Pets from './Pets/Pets';
import {
  getLocation,
  getWeather,
  getHourlForecast,
  getDailyForecast,
} from '../services/weatherApi';
import { CardListBox, CardListText } from './App.styled';
import { Stats } from './Stats/Stats';
import { Graph } from './Graph/Graph';
import { Table } from './Table/Table';
import Footer from './Footer/Footer';
import Gallery from './Gallery/Gallery';
import fetchImages from 'services/pixabayApi';

export const Context = createContext();

export const App = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [username, setUsername] = useState(() => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).username : '';
  });

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
            city => city.weather.id === weatherData.id
          );
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

  const handleReload = cityName => {
    console.log('reload');
    getLocation(cityName)
      .then(coords => {
        return Promise.all([
          getWeather(coords.lat, coords.lon),
          getHourlForecast(coords.lat, coords.lon),
          getDailyForecast(coords.lat, coords.lon),
        ]);
      })
      .then(([weatherData, forecastData, dailyForecast]) => {
        setCities(prev =>
          prev.map(city =>
            city.weather.id === weatherData.id
              ? {
                  weather: weatherData,
                  forecast: forecastData,
                  daily: dailyForecast,
                }
              : city
          )
        );
      })
      .catch(() => {});
  };

  const handleDelete = id => {
    setCities(prevCities => {
      const updatedCities = prevCities.filter(city => city.weather.id !== id);

      if (cityStats === id) setCityStats(null);
      if (cityGraph === id) setCityGraph(null);
      if (cityTable === id) setCityTable(null);

      return updatedCities;
    });
  };

  const openSignUpForm = () => setShowSignUpForm(true);
  const closeSignUpForm = () => setShowSignUpForm(false);

  const [cityStats, setCityStats] = useState(null);
  const [cityGraph, setCityGraph] = useState(null);
  const [cityTable, setCityTable] = useState(null);

  return (
    <Context.Provider value={{ username, setUsername }}>
      <Container>
        <Header onOpenSignUp={openSignUpForm} username={username} />
      </Container>

      <Hero onSearch={handleSearch} />

      <Container>
        {cities.length > 0 ? (
          <CardList
            cities={cities}
            onDelete={handleDelete}
            onReload={handleReload}
            seeMore={id => setCityStats(id)}
            seeHourly={id => setCityGraph(id)}
            seeWeekly={id => setCityTable(id)}
          />
        ) : (
          <CardListBox>
            <CardListText>Search some city above</CardListText>
          </CardListBox>
        )}

        {cityStats && (
          <Stats
            weather={
              cities.find(city => city.weather.id === cityStats)?.weather ||
              null
            }
          />
        )}

        {cityGraph && (
          <Graph
            forecast={
              cities.find(city => city.weather.id === cityGraph)?.forecast ||
              null
            }
          />
        )}

        {cityTable && (
          <Table
            daily={
              cities.find(city => city.weather.id === cityTable)?.daily || null
            }
          />
        )}

        <Pets />
        <Gallery images={images} />
      </Container>

      {showSignUpForm && (
        <SignUpForm onClose={closeSignUpForm} setUsername={setUsername} />
      )}

      <Footer />
    </Context.Provider>
  );
};
