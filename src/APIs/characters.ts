import axios from 'axios'

const base_url: string = 'https://rickandmortyapi.com/api/character'

export async function getCharacters(page: number = 1) {
  return axios.get(base_url + `/?page=${page}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching characters:", error);
      return {};
    });
}

export async function getCharacter(id: number) {
  return axios.get(base_url + `/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching character:", error);
      return {};
    });
}

export async function getCharacterByUrl(url: string) {
  return axios.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching character by url:", error);
      return {};
    });
}