import axios from 'axios';
import { userConstants } from '../constants';
import { services } from './refreshToken';

export const orderService = {
    getAllOrders,
};

function getAllOrders() {
    return axios({
       method: 'POST',
       headers: {
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).access,
           'Content-Type': 'multipart/form-data',
       },
       url:  userConstants.API_HEADER + '/pharmacy/getorders/',
       data: {
            category: 'all',
       }
    }).then(res => {
        return res.data;
    })
}
