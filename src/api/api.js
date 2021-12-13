const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '24468918-f1629215ca3337ba51b4044a7';

function fetchImagesApi(serchName, page = 1) {
  const url = `${BASE_URL}?q=${serchName}&key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`No img`));
  });
}

export { fetchImagesApi };
