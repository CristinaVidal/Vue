import axios from 'axios';

export const ENDPOINTS = {
  playlists: '/chart/0/playlists'
}

export const API = axios.create({
  baseURL: 'https://developers.deezer.com/api',
  getPlaylists: () => {
    axios.get(this.baseURL + ENDPOINTS.playlists)
      .then(datos => {
        console.log(datos)
      })
      .catch(error => {
        console.error(error);
      })
  }
});
