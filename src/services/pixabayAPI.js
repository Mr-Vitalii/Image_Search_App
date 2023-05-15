import axios from 'axios';

const API_KEY = '36362173-ab9e08cb840ddb0f12c6daf84';

axios.defaults.baseURL = 'https://pixabay.com/api'

export const getPictures = async (searchQuery, page) => {
    const response = await axios.get(`/?key=${API_KEY}&q=${searchQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data
}


