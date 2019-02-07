import fetchJsonp from './fetchJsonp';

const URL = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';

async function getPhotos() {
  const response = await fetchJsonp(URL);
  const data = await response.json();

  return data.items;
}

export default {
  getPhotos
}
