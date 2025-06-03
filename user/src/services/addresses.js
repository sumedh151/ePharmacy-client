import axios from 'axios';
import { userConstants } from '../constants';
import { services } from './refreshToken';

export const addressServices = {
    getSavedAddresses,
    editSavedAddress,
    deleteSavedAddress,
    saveNewAddress,
}

function getSavedAddresses() {
    services.refreshToken();

    
    return axios({
        method: 'GET',
        url : userConstants.API_HEADER + '/products/list-address/',
        headers : { 
            'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('user')).access,
        },
    })
    .then(services.handleResponse)
    .then(data => {return data})

    // console.log(data)
    // return data
}

function editSavedAddress(index, formData) {
    services.refreshToken();

    return axios ({
        method: 'PATCH',
        url: userConstants.API_HEADER + '/products/detail-address/'+index+'/',
        body: JSON.stringify(formData),
        headers : { 
            'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('user')).access,
        },
    })
    .then(services.handleResponse)
    .then(data => {
        return data
    })
}

function deleteSavedAddress(index) {
    services.refreshToken();

    return axios ({
        method: 'DELETE',
        url: userConstants.API_HEADER + '/products/detail-address/'+index+'/',
        // body: JSON.stringify(formData),
        headers : { 
            'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('user')).access,
        },
    })
    .then(services.handleResponse)
    .then(data => {
        return data
    })
}

function saveNewAddress(formData) {
    services.refreshToken();

    return axios({
        method: 'POST',
        url: userConstants.API_HEADER + '/products/list-address/',
        body: JSON.stringify(formData),
        headers : { 
            'Authorization' : 'Bearer ' + JSON.parse(localStorage.getItem('user')).access,
        },
    })
    .then(services.handleResponse)
    .then(data => {
        return data
    })
}