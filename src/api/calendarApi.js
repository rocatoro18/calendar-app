import axios from 'axios';
import { getEnVariables } from '../helpers';

const {VITE_API_URL} = getEnVariables();

const calendarApi = axios.create({
    baseURL: VITE_API_URL
});

// TODO: Configurar interceptores
// CUALQUIER PETICION QUE HAGA CON EL CALENDAR API
// ADICIONALMENTE SE LE AGREGA ESTE HEADER
calendarApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})

export default calendarApi;