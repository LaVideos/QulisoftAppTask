import axios from 'axios';
import {BASE_URL} from '../../constants';
// import {authService} from '../auth/auth.service';

const axiosService = axios.create({baseURL:BASE_URL});

// axiosService.interceptors.request.use((config)=>{
//     const token = authService.setToken();
//     if (token){
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return  config
// });

export {
    axiosService
}
