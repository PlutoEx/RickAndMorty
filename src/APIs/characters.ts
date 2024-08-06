import axios from 'axios'

const base_url: string = 'https://rickandmortyapi.com/api'

export function getCharacters(page: number = 1) {
  return axios.get(base_url + `/character/?page=${page}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching characters:", error);
      return {};
    });
}

export function getCharacter(id: number) {
  return axios.get(base_url + `/character/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching character:", error);
      return {};
    });
}