import axios from 'axios';
import { getEnVariables } from '../helpers';

const {VITE_API_URL} = getEnVariables();

const calendarApi = axios.create({
    baseURL: VITE_API_URL
});

// TODO: Configurar interceptores

export default calendarApi;