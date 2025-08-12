const API_KEY = '7a0f88d30758380b4dbe9d076d6ade14';
const BASE_URL = 'https://gnews.io/api/v4';

export default function fetchNews(
  query = 'pets',
  max = 10,
  lang = 'en',
  page = 1
) {
  return fetch(
    `${BASE_URL}/search?q=${encodeURIComponent(
      query
    )}&lang=${lang}&max=${max}&page=${page}&sortby=publishedAt&apikey=${API_KEY}`
  )
    .then(res => {
      if (!res.ok) throw new Error('Network error');
      return res.json();
    })
    .then(data => data.articles);
}
