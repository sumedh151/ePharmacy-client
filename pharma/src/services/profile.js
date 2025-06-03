import axios from 'axios';
import { userConstants } from '../constants';
import { services } from './refreshToken';

export const profileServices = {
    getProfile,
    updateProfile,
};

function getProfile() {
    services.refreshToken();

    return axios({
        method: 'GET',
        url: userConstants.API_HEADER + '/profiles/getprofile/',
        headers : {
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).access,
        },
    })
    .then(services.handleResponse)
    .then(data => {
        return data
    })
}

function updateProfile(formData) {
    services.refreshToken();

    return axios({
        method: 'POST',
        url: userConstants.API_HEADER + '/profiles/updateprofile/',
        body: JSON.stringify({update_data : formData}),
        headers : {
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).access,
        },
    })
    .then(services.handleResponse)
    .then(data => {
        return data
    })
}