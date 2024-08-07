import axios from 'axios'

const base_url: string = 'https://rickandmortyapi.com/api/location'

export async function getLocations(page: number = 1) {
  return axios.get(base_url + `/?page=${page}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching location:", error);
      return {};
    });
}

export async function getLocation(id: number) {
  return axios.get(base_url + `/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching location:", error);
      return {};
    });
}