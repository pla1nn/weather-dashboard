const API_KEY = 'b46ebb01ba611714402a6d1507259a63';
const BASE_URL = 'https://api.openweathermap.org/data/3.0';

export const fetchWeather = (lat, lon, part) => {
  return fetch(
    `${BASE_URL}/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API_KEY}&units=metric`
  ).then(response => response.json());
};

export const fetchLocation = city => {
  return fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
  ).then(response => response.json());
};
