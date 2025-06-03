import axios from 'axios';
import { userConstants } from '../constants';
import { services } from './refreshToken';

export const inventoryManagementServices = {
    uploadInventory,
    getInventory,
    markAvailable,
}

function uploadInventory(formData) {
    // Refresh Token

    let data = new FormData();
    // console.log(document.querySelector('#inventory_file').files[0]);
    data.append("file", document.querySelector('#inventory_file').files[0]);
    
    return services.refreshToken().then(() => {
        return axios({
            method: 'POST',
            data: data,
            headers : {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).access,
                'Content-Type': 'multipart/form-data',
            },
            url: userConstants.API_HEADER + '/pharmacy/registerinventory/',
        })
        .then(services.handleResponse)
        .then(data => {return data})
    });
}

function getInventory() {
    // Refresh Token

    // Make request
    return services.refreshToken().then(() => {
        return axios({
            method: 'POST',
            url: userConstants.API_HEADER + '/pharmacy/getinventory/',
            body: JSON.stringify({
                'all': '',
            }),
            headers : {
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).access,
                // 'Content-Type': 'application/json',
            },
        })
        .then(services.handleResponse)
        .then(data => {
            return data
        })
    });
}

function markAvailable(medArray) {

}