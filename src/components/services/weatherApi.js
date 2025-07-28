const API_KEY = 'ca96fbe0dc146527971a35a7deb6d0d7';
const BASE_URL = 'https://api.openweathermap.org';

const city = 'new york';

export const getLocation = city => {
  return fetch(`${BASE_URL}/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      if (!data.length) throw new Error('City not found');
      return {
        lat: data[0].lat,
        lon: data[0].lon,
      };
    });
};

export const getWeather = (lat, lon) => {
  return fetch(
    `${BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ).then(response => response.json());
};

getLocation(city)
  .then(coords => {
    return getWeather(coords.lat, coords.lon);
  })
  .then(weather => {
    console.log(`weather in ${city}: `, weather);
  })
  .then(error => {
    // console.log('error:', error);
  });