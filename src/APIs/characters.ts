import axios from 'axios'

const base_url: string = 'https://rickandmortyapi.com/api'

export function getCharacters(page: number = 1): axios.ResponseType {
  return axios.get(base_url + `/character/?page=${page}`)
    .then((response: axios.ResponseType) => {
      return response.data;
    })
    .catch((error: axios.AxiosError) => {
      console.error("Error fetching characters:", error);
      return {};
    });
}