import axios from 'axios'
export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const {data} = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '94692cc4bcmshe45d70092821080p158913jsn1b3bffa08f24',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    },
  });
  
return data;
}