import './css/styles.css';
import iziToast from 'izitoast';    
import 'izitoast/dist/css/iziToast.min.css'
import './css/loader.css';

import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
} from './js/render-functions';

import { getImagesByQuery } from './js/pixabay-api';

const form  = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');
form.addEventListener('submit', evt => {
    evt.preventDefault();
  
    const query = input.value.trim();
    if (!query) return;
  
    clearGallery();
    showLoader();
  
    getImagesByQuery(query)
    .then(data => {
        return new Promise(resolve => {
          setTimeout(() => resolve(data), 1000);
        });
      })
      .then(data => {
        if (data.hits.length === 0) {
          iziToast.info({ message: 'Нічого не знайдено' });
          return;
        }
        createGallery(data.hits);
      })
      .catch(error => {
        iziToast.error({ message: 'Помилка запиту' });
        console.error(error);
      })
      .finally(() => {
        hideLoader();
        input.value = '';
      });
  });