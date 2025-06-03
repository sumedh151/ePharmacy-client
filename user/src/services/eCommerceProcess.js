import axios from 'axios';
import { userConstants } from '../constants';
import { services } from './refreshToken';

export const eCommerceProcessServices = {
    prescriptionUpload,
    addToCart,
    getPaymentDetails,
    makePayment,
};

/**
 * Needs to changed when OCR is implemented
 */
function prescriptionUpload() {
    // Refreshing Token
    services.refreshToken()

    return axios({
        method: 'GET',
        headers: {
            'Accept' : 'application/json',
            'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('user')).access
        },
        url: userConstants.API_HEADER + '/products/item/',
    })
    .then(services.handleResponse)
    .then(data => {
        // console.log(data);
        return data;
    });
}

/**
 * 
 * @param {string} add_to_cart_url (provided by the API)
 * 
 */
function addToCart(add_to_cart_url) {
    // Refresh token
    services.refreshToken()

    return axios({
        url: userConstants.API_HEADER + add_to_cart_url,
        method: 'GET',
        headers: {
            'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('user')).access
        }
    })
    .then(services.handleResponse)
    .then(data => {
        return data;
    });
}


/**
 * To get the payment details
 */
function getPaymentDetails() {
    services.refreshToken()

    return axios({
        url: userConstants.API_HEADER + '/products/payment/',
        method: 'GET',
        headers: {
            'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('user')).access
        }
    })
    .then(services.handleResponse)
    .then(data => {
        return data;
    });
}


/**
 * Make payment using new card or a saved card
 * @param {object} formData Request body
 */
function makePayment(formData) {
    services.refreshToken()

    return axios({
        url: userConstants.API_HEADER + '/products/payment/',
        method: 'POST',
        headers: {
            'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('user')).access
        },
        body: JSON.stringify(formData)
    })
    .then(services.handleResponse)
    .then(data => {
        return data
    });
}