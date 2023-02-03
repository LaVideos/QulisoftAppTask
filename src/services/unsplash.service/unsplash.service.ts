import {axiosService} from '../index';
import {ACCESS_KEY, ENDPOINTS} from '../../constants';

export const unsplashService = {
    getPhotos: (page:number = 1) => axiosService.get(ENDPOINTS.PHOTOS, {
        params: {
            client_id:ACCESS_KEY,
            per_page:30,
            page:page
        }
    })
};
