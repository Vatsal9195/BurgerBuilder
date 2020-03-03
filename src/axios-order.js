import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://test-angular-4a6da.firebaseio.com/'
});

export default instance;

//axios.get(url, { headers, params });