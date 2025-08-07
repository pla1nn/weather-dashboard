const API_KEY = 'a656a39f2cb2423db889817c84e74c4c';
const BASE_URL = 'https://newsapi.org/v2';

export default function fetchNews(
  query = 'pets',
  pageSize = 4,
  language = 'en'
) {
  const endpoint = `${BASE_URL}/everything?q=${encodeURIComponent(
    query
  )}&pageSize=${pageSize}&language=${language}&sortBy=publishedAt&apiKey=${API_KEY}`;

  return fetch(endpoint)
    .then(res => (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)))
    .then(({ articles }) => {
      return articles.filter(article => article.urlToImage);
    })
    .catch(err => {
      console.error('Помилка', err);
      return [];
    });
}
