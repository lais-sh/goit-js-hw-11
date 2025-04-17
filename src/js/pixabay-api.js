import axios  from "axios";
const API_KEY = "49650117-af312fdd4c8d669445c27b54b";
const BASE_URL = 'https://pixabay.com/api/';


export async function getImagesByQuery(query) {
    const params = {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    };
    const response = await axios.get(BASE_URL, { params });
  return response.data;
}