import axios from "axios";

const Base_Url = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key':  '2b42b5db3emshd572a6a18837a62p162463jsn981ce4f5db0a',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};


export const fetchFromApi = async (url) => {
    const {data} = await axios.get(`${Base_Url}/${url}`, options);
    return data;
}