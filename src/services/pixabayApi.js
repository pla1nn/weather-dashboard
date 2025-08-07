const API_KEY = '47606801-75c62912983a7ab29411db2a8';
const BASE_URL = 'https://pixabay.com/api/';

export default function fetchImages() {
  return fetch(
    `${BASE_URL}/?key=${API_KEY}&q=nature&image_type=photo&orientation=horizontal&per_page=10`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error());
  });
}
