import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-c5297.firebaseio.com/'
});

export default instance;