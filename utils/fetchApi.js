import axios from 'axios'
export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const {data} = await axios.get((url), {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': 'd28414e1a2msh8f25ddd6d890f2cp114b41jsn96066f67d514'
    },
  });
  
return data;
}