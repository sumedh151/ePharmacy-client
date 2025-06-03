import axios from 'axios';
import { services } from './refreshToken';
import { userConstants } from '../constants';

export const cartDetailServices = {
    getCartDetails,
    removeItemFromCart,
}

function getCartDetails() {

    // Refresh Token
    services.refreshToken();

    return axios({
        url: userConstants.API_HEADER + '/products/checkout/',
        method: 'GET',
        headers: {
            'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('user')).access,
        }
    })
    .then(services.handleResponse)
    .then(data => {
        return data;
    });
}

function removeItemFromCart(remove_url) { 
    services.refreshToken();

    return axios({
        url: userConstants.API_HEADER + remove_url,
        method: 'GET',
        headers: {
            'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('user')).access,
        }
    })
    .then(services.handleResponse)
    .then(data => {
        return data;
    });
}