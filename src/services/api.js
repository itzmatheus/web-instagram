import axios from 'axios';
import apiInstagramUrl from '../config/global';


const api = axios.create({
    baseURL: apiInstagramUrl,
});

export default api;