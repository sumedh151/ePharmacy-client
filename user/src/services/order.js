import axios from 'axios';
import { userConstants } from '../constants';
import { services } from './refreshToken';

export const orderService = {
    getAllOrders,
};

function getAllOrders() {
    return services.refreshToken().then(() => {
        return axios({
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).access,
                'Content-Type': 'multipart/form-data',
            },
            url:  userConstants.API_HEADER + '/products/order-history/',
        }).then(res => {
            return res.data;
        })  
    });
}